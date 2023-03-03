import { routerConstant } from '@/src/constant/routerConstant';
import { SettingOutlined } from '@ant-design/icons';

export const sidebarItem = [
  {
    icon: SettingOutlined,
    name: 'Dashboard',
    id: '1',
    path: (artist_id: string) => routerConstant.seller.artist_id.index(artist_id),
  },
  {
    icon: SettingOutlined,
    name: 'User',
    id: '2',
    path: (artist_id: string) => routerConstant.seller.user.index,
  },
  {
    icon: SettingOutlined,
    name: 'Event',
    id: '3',
    path: (artist_id: string) => routerConstant.seller.artist_create,
  },
  {
    icon: SettingOutlined,
    name: 'Member',
    id: '4',
    path: (artist_id: string) => routerConstant.seller.artist_edit,
  },
];
