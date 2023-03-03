import { routerConstant } from '@/src/constant/routerConstant';
import { SettingOutlined } from '@ant-design/icons';

export const sidebarItem = [
  {
    icon: SettingOutlined,
    name: 'アーティスト',
    id: '1',
    path: (artist_id: string) => routerConstant.seller.manage_artist.dashboard.index(artist_id),
  },
  {
    icon: SettingOutlined,
    name: 'ダッシュボード',
    id: '2',
    path: (artist_id: string) => routerConstant.seller.manage_artist.user.index(artist_id),
  },
  {
    icon: SettingOutlined,
    name: 'ユーザー',
    id: '3',
    path: (artist_id: string) => routerConstant.seller.manage_artist.event.index(artist_id),
  },
  {
    icon: SettingOutlined,
    name: 'メンバー',
    id: '4',
    path: (artist_id: string) => routerConstant.seller.manage_artist.member.index(artist_id),
  },
];
