import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@/components/ui";
import { Dot } from "lucide-react";

type RestaurantInfoProps = {
  restaurant: Restaurant;
};

export const RestaurantInfo = ({ restaurant }: RestaurantInfoProps) => (
  <Card className="border-sla">
    <CardHeader>
      <CardTitle className="text-3xl font-bold tracking-tight">
        {restaurant.name}
      </CardTitle>
      <CardDescription>
        {restaurant.city}, {restaurant.country}
      </CardDescription>
    </CardHeader>
    <CardContent>
      {restaurant.cuisines.map((cuisine, index) => (
        <span key={`${cuisine}-${index}`} className="flex">
          <span>{cuisine}</span>
          {index < restaurant.cuisines.length - 1 && <Dot />}
        </span>
      ))}
    </CardContent>
  </Card>
);

export const RestaurantInfoSkeleton = () => (
  <Skeleton className="h-40 rounded-xl" />
);
