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
