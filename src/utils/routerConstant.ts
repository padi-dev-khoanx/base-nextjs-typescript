export const routerConstant = {
  seller: {
    artist: "/seller/aritst",
    artist_create: "/seller/artist/create",
    artist_edit: "/seller/artist/edit",
    artist_id: {
      index: (artist_id: string) => `seller/${artist_id}/dashboard`,
    },
  },
  error404: "/404",
  erorr500: "/500",
  home: "/",
  login: "/login",
};

export const routerPrivate: Array<string> = [
  // routerConstant.connectWallet,
  // routerConstant.accountSetting.index,
  // routerConstant.accountSetting.wallet,
  // routerConstant.accountSetting.profile,
  // routerConstant.accountSetting.creditCard,
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
