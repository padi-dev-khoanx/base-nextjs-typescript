import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useSetRecoilState } from 'recoil';
import { verifyJwt } from '../../utils/verifyJwt';
import { useQueryMyInfoCache } from '@/src/api/use.api';
import { loggedState } from '@/src/recoil/login.recoil';

const Authentic = () => {
  const cookies = new Cookies();
  const setLogged = useSetRecoilState(loggedState);

  useEffect(() => {
    if (!verifyJwt(cookies.get('jwt'))) {
      setLogged(false);
    }
  });

  useQueryMyInfoCache(verifyJwt(cookies.get('jwt')));

  return null;
};
export default Authentic;
