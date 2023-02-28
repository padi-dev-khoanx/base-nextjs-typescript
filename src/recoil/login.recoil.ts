import { atom, useRecoilValue } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import React from 'react';

const { persistAtom } = recoilPersist();

export const loggedState = atom({
  key: 'logged',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
