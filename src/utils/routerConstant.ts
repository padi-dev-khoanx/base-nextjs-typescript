export const routerConstant: any = {};

export const routerPrivate: Array<string> = [
  routerConstant.connectWallet,
  routerConstant.accountSetting.index,
  routerConstant.accountSetting.wallet,
  routerConstant.accountSetting.profile,
  routerConstant.accountSetting.creditCard,
];

export const isRouterSeller = (pathName: string): boolean => {
  return pathName.startsWith("/seller");
};

export const isRouterPrivate = (pathName: string): boolean => {
  return (
    routerPrivate.includes(pathName) ||
    pathName.startsWith("/@/") ||
    pathName.startsWith("/purchase")
  );
};
