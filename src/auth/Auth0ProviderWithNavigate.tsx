import { PropsWithChildren } from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

export const Auth0ProviderWithNavigate = ({ children }: PropsWithChildren) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Auth0 environment variables are not set");
  }

  const redirectHandler = (appState?: AppState, user: User) => {};

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={redirectHandler}
    >
      {children}
    </Auth0Provider>
  );
};
