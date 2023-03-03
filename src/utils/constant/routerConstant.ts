export const routerConstant = {
  seller: {
    index: "/seller",
    login: "/seller/login",
    artist: "/seller/artist",
    artist_create: "/seller/artist/create",
    artist_edit: "/seller/artist/edit",
    manage_artist: {
      dashboard: {
        index: (artist_id: string) => `seller/${artist_id}/dashboard`,
      },
      user: {
        index: (artist_id: string) => `/seller/${artist_id}/user`,
        invite: (artist_id: string) => `/seller/${artist_id}/user/invite`,
        edit: (artist_id: string) => `seller/${artist_id}/edit`
      },
    }
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
