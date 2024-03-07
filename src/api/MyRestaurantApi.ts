import { env } from "@/lib/env";
import { Order, OrderStatus, Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = env.VITE_API_BASE_URL;

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const createMyRestaurant = async (
    formData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      body: formData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  };

  return useMutation({
    mutationFn: createMyRestaurant,
    onSuccess: () => {
      toast.success("Restaurant created!", {
        style: {
          color: "rgb(249 115 22)",
        },
      });
      queryClient.invalidateQueries({
        queryKey: ["myRestaurant"],
      });
    },
    onError: () => toast.error("Failed to create new restaurant!"),
  });
};

export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const updateMyRestaurant = async (
    formData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      body: formData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "PUT",
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  };

  return useMutation({
    mutationFn: updateMyRestaurant,
    onSuccess: () => {
      toast.success("Restaurant updated!", {
        style: {
          color: "rgb(249 115 22)",
        },
      });
      queryClient.invalidateQueries({
        queryKey: ["myRestaurant"],
      });
    },
    onError: () => toast.error("Failed to update the restaurant!"),
  });
};

export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurant = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  };

  return useQuery({
    queryKey: ["myRestaurant"],
    queryFn: getMyRestaurant,
  });
};

export const useGetMyRestaurantsOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantOrders = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  };

  return useQuery({
    queryKey: ["myRestaurantOrders"],
    queryFn: getMyRestaurantOrders,
  });
};

export const useUpdateMyRestaurantOrderStatus = () => {
  const queryClient = useQueryClient();
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantOrderStatus = async ({
    orderId,
    status,
  }: {
    orderId: string;
    status: OrderStatus;
  }) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/restaurant/order/${orderId}/status`,
      {
        body: JSON.stringify({ status }),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        method: "PATCH",
      }
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  };

  return useMutation({
    mutationFn: updateMyRestaurantOrderStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myRestaurantOrders"],
      });

      toast.success("Order status updated!", {
        style: {
          color: "rgb(249 115 22)",
        },
      });
    },
    onError: () => toast.error("Failed to update order status!"),
  });
};
