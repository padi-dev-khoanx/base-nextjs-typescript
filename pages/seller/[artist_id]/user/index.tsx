import { LayoutSeller } from "@/src/components/layouts/LayoutSeller";
import { currentMenuItemState } from "@/src/recoil/seller-sidebar.recoil";
import ListUser from "@/src/view/user/ListUser";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const User = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("user");
  }, []);

  return (
    <LayoutSeller title="List user">
      <ListUser />
    </LayoutSeller>
  );
};

export default User;
