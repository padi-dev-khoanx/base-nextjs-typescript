export const routerConstant = {
  seller: {
    index: "/seller",
    login: "/seller/login",
    artist: "/seller/artist",
    artist_create: "/seller/artist/create",
    artist_edit: "/seller/artist/edit",
    manage_artist: {
      dashboard: {
        index: (artist_id: string) => `/seller/${artist_id}/dashboard`,
      },
      user: {
        index: (artist_id: string) => `/seller/${artist_id}/user`,
        invite: (artist_id: string) => `/seller/${artist_id}/user/invite`,
        edit: (artist_id: string, user_id: string) => `/seller/${artist_id}/user/edit/${user_id}`
      },
      event: {
        index: (artist_id: string) => `/seller/${artist_id}/event`,
        create: (artist_id: string) => `/seller/${artist_id}/event/create`,
        edit: (artist_id: string, event_id : string) => `/seller/${artist_id}/event/edit/${event_id}`,

        ticket: {
          index: (artist_id: string, event_id: string) => `/seller/${artist_id}/event/${event_id}/ticket`,
          create: (artist_id: string, event_id: string) => `/seller/${artist_id}/event/${event_id}/ticket/create`,
          edit: (artist_id: string, event_id: string, ticket_id: string) => `/seller/${artist_id}/event/${event_id}/ticket/edit/${ticket_id}`
        },
      },
      member: {
        index: (artist_id: string) => `/seller/${artist_id}/member`,
      }
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
