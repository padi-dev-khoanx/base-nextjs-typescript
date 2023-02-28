import Link from 'next/link';
import { GetGroupId } from '../../../utils/getGroupId';
import { useRouter } from 'next/router';
import { routerConstant } from '@/src/utils/routerConstant';

export const TabShowScene = ({ currentTab = 'show' }) => {
  const router = useRouter();
  const groupId = GetGroupId();
  const sceneId = Number(router?.query?.scene_id);

  return (
    <div>
      <div className='px-[24px] border-b border-b-[#D9D9D9]'>
        <ul className='flex w-full'>
          <li className='mr-[32px]'>
            <Link
              href={`${routerConstant.seller.managerGroup.scene.show(groupId)}?scene_id=${sceneId}`}
            >
              <span
                className={`block py-[16px] cursor-pointer ${
                  currentTab === 'show'
                    ? 'text-[#1890FF] text-[16px] leading-[24px] relative before:absolute before:bg-[#1890FF] before:h-[2px] before:w-full before:left-0 before:bottom-[-1px]'
                    : ''
                }`}
              >
                プレビュー
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={`${routerConstant.seller.managerGroup.scene.card(groupId)}?scene_id=${sceneId}`}
            >
              <span
                className={`block py-[16px] cursor-pointer ${
                  currentTab !== 'show'
                    ? 'text-[#1890FF] text-[16px] leading-[24px] relative before:absolute before:bg-[#1890FF] before:h-[2px] before:w-full before:left-0 before:bottom-[-1px]'
                    : ''
                }`}
              >
                発行済みカード一覧
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
