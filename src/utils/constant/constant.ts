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
    path: (artist_id: string) => routerConstant.seller.manage_artist.event.index(artist_id),
  },
  {
    icon: SettingOutlined,
    name: "Member",
    id: "4",
    path: (artist_id: string) => routerConstant.seller.manage_artist.member.index(artist_id),
  },
];

export const REGEX_URL =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;