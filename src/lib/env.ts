import { cleanEnv, str } from "envalid";

export const env = cleanEnv(import.meta.env, {
  VITE_AUTH0_DOMAIN: str(),
  VITE_AUTH0_CLIENT_ID: str(),
  VITE_AUTH0_CALLBACK_URL: str(),
  VITE_API_BASE_URL: str(),
  VITE_AUTH0_AUDIENCE: str(),
});
