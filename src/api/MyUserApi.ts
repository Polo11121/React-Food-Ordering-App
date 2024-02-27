import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { env } from "@/lib/env";
import { UpdateUserSchema } from "@/validationSchemas/updateUserProfile";
import { toast } from "sonner";
import { User } from "@/types";

const API_BASE_URL = env.VITE_API_BASE_URL;

type CreateMyUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUser = async (request: CreateMyUserRequest): Promise<User> => {
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
    mutationFn: createMyUser,
  });
};

export const useUpdateMyUser = () => {
  const queryClient = useQueryClient();
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUser = async (
    formData: Omit<UpdateUserSchema, "email">
  ): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      body: JSON.stringify(formData),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    return response.json();
  };

  return useMutation({
    mutationFn: updateMyUser,
    onError: () => toast.error("Failed to update user profile!"),
    onSuccess: () => {
      toast.success("User profile updated successfully!", {
        style: {
          color: "rgb(249 115 22)",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["myUser"] });
    },
  });
};

export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUser = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    return response.json();
  };

  return useQuery({
    queryKey: ["myUser"],
    queryFn: getMyUser,
  });
};
