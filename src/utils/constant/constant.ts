import { SettingOutlined } from "@ant-design/icons";
import { routerConstant } from "./routerConstant";

export const sidebarItem = [
  {
    icon: SettingOutlined,
    name: "Dashboard",
    id: "1",
    path: (artist_id: string) =>
      routerConstant.seller.manage_artist.dashboard.index(artist_id),
  },
  {
    icon: SettingOutlined,
    name: "User",
    id: "2",
    path: (artist_id: string) => 
      routerConstant.seller.manage_artist.user.index(artist_id),
  },
  {
    icon: SettingOutlined,
    name: "Event",
    id: "3",
    path: (artist_id: string) => "",
  },
  {
    icon: SettingOutlined,
    name: "Member",
    id: "4",
    path: (artist_id: string) => "",
  },
];
