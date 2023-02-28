import { useRouter } from 'next/router';

export const GetGroupId = () => {
  const router = useRouter();
  return isNaN(Number(router.query.group_id)) ? 0 : Number(router.query.group_id);
};
