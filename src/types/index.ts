export type User = {
  _id: string;
  auth0Id: string;
  email: string;
  __v: number;
  addressLine1: string;
  city: string;
  country: string;
  name: string;
};

export type MenuItem = {
  name: string;
  price: number;
  _id: string;
};

export type Restaurant = {
  user: string;
  name: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  _id: string;
  lastUpdated: string;
  __v: number;
};

export interface RestaurantSearch {
  data: Restaurant[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CheckoutSessionRequest = {
  cartItems: {
    menuItemId: string;
    quantity: string;
    name: string;
  }[];
  deliveryDetails: {
    name: string;
    email: string;
    addressLine1: string;
    city: string;
  };
  restaurantId: string;
};

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

export type Order = {
  _id: string;
  restaurant: Restaurant;
  user: User;
  deliveryDetails: {
    city: string;
    email: string;
    name: string;
    addressLine1: string;
  };
  cartItems: {
    menuItemId: string;
    quantity: string;
    name: string;
  }[];

  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  restaurantId: string;
};
