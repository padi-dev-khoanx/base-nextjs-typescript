export const routerConstant = {
  seller: {
    index: "/seller",
    artist: "/seller/artist",
    artist_create: "/seller/artist/create",
    artist_edit: "/seller/artist/edit",
    artist_id: {
      index: (artist_id: string) => `seller/${artist_id}/dashboard`,
    },
    user: {
      index: "/seller/user",
      invite: "/seller/user/invite",
      change_role: "/seller/user/change-role",
    },
  },
  error404: "/404",
  error500: "/500",
  home: "/",
  login: "/login",
};

export const routerPrivate: Array<string> = [];

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
