import { useMutation } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { env } from "@/lib/env";

const API_BASE_URL = env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUser = async (request: CreateUserRequest) => {
    if (!request.auth0Id || !request.email) {
      throw new Error("Invalid request");
    }

    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      body: JSON.stringify(request),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response.json();
  };

  return useMutation({
    mutationFn: createUser,
  });
};
