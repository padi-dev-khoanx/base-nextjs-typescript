import { atom, useRecoilValue } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import React from 'react';

const { persistAtom } = recoilPersist();

export const selectedGroupState = atom({
  key: 'selectedGroup',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

// Because SSR, to use localstorage need check is initial
export function useSelectedGroupState() {
  const [isInitial, setIsInitial] = React.useState(true);
  const selectedGroup = useRecoilValue(selectedGroupState);

  React.useEffect(() => {
    setIsInitial(false);
  }, []);

  return isInitial ? 0 : selectedGroup;
}

export const currentMenuItemState = atom({
  key: 'currentMenuItem',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

// Because SSR, to use localstorage need check is initial
export function useCurrentMenuItemState() {
  const [isInitial, setIsInitial] = React.useState(true);
  const currentMenuItem = useRecoilValue(currentMenuItemState);

  React.useEffect(() => {
    setIsInitial(false);
  }, []);

  return isInitial ? '' : currentMenuItem;
}
