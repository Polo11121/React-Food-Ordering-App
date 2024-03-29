import { Restaurant } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Banknote, Clock, Dot } from "lucide-react";
import { Skeleton } from "@/components/ui";

type SearchResultCardProps = {
  restaurant: Restaurant;
};

export const SearchResultCard = ({ restaurant }: SearchResultCardProps) => (
  <Link
    to={`/detail/${restaurant._id}`}
    className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
  >
    <AspectRatio ratio={16 / 6}>
      <img
        src={restaurant.imageUrl}
        alt={`${restaurant.name} image`}
        className="rounded-md w-full h-full object-cover"
      />
    </AspectRatio>
    <div>
      <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline">
        {restaurant.name}
      </h3>
      <div id="card-content" className="grid md:grid-cols-2 gap-2">
        <div className="flex flex-row flex-wrap">
          {restaurant.cuisines.map((item, index) => (
            <span className="flex" key={item}>
              <span>{item}</span>
              {index < restaurant.cuisines.length - 1 && <Dot />}
            </span>
          ))}
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex items-center gap-1 text-green-600">
            <Clock className="text-green-600" />
            {restaurant.estimatedDeliveryTime} mins
          </div>
          <div className="flex items-center gap-1">
            <Banknote />
            Delivery from £{(restaurant.deliveryPrice / 100).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export const SearchResultCardSkeleton = () => (
  <div className="grid lg:grid-cols-[2fr_3fr] gap-5 group">
    <AspectRatio ratio={16 / 6}>
      <Skeleton className="rounded-md w-full h-full object-cover" />
    </AspectRatio>
    <div>
      <Skeleton className="h-8 w-32 mb-2" />
      <div className="grid md:grid-cols-2 gap-2">
        <div className="flex gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="flex flex-col gap-2 ">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
    </div>
  </div>
);
