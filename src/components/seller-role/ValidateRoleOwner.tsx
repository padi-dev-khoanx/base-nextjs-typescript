import { GetGroupId } from "../../utils/getGroupId";
import Cookies from "universal-cookie";
import { RoleGroupEnum } from "../../enum/roleGroupEnum";
import { ReactNode } from "react";
import { useSelectedGroupState } from "../../recoil/sellerSidebarRecoilState";

type Props = {
  children: ReactNode;
  groupIdProp?: number;
};

export const ValidateRoleOwner = ({ children, groupIdProp }: Props) => {
  const cookies = new Cookies();
  const selectedGroup = useSelectedGroupState();
  const groupIdByRouter = GetGroupId();

  const groupId =
    groupIdProp ?? (groupIdByRouter !== 0 ? groupIdByRouter : selectedGroup);

  const roleByGroupId = cookies.get("role_user_in_group")?.[groupId];

  if (roleByGroupId === RoleGroupEnum.OWNER) {
    return <>{children}</>;
  }
  return null;
};
