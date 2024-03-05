import { PropsWithChildren } from "react";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { env } from "@/lib/env";

export const Auth0ProviderWithNavigate = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const domain = env.VITE_AUTH0_DOMAIN;
  const clientId = env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = env.VITE_AUTH0_CALLBACK_URL;
  const audience = env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("Auth0 environment variables are not set");
  }

  const redirectHandler = (appState?: AppState) =>
    navigate(appState?.returnTo || "/auth-callback");

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience,
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={redirectHandler}
    >
      {children}
    </Auth0Provider>
  );
};
