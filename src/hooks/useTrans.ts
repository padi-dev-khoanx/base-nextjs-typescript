import en from '@/public/lang/en';
import ja from '@/public/lang/js';
import vi from '@/public/lang/vi';
import { useRouter } from 'next/router';

const useTrans = () => {
  const router = useRouter();

  if (router?.locale === 'vi') {
    return vi;
  }

  if (router?.locale === 'en') {
    return en;
  }

  return vi;
};

export default useTrans;
