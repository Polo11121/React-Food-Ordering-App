import { MenuItemSkeleton, RestaurantInfoSkeleton } from "@/components";
import { AspectRatio, OrderSummarySkeleton, Skeleton } from "@/components/ui";

export const DetailPageLoadingScreen = () => (
  <div className="flex flex-col gap-10">
    <AspectRatio ratio={16 / 9}>
      <Skeleton className="h-full w-full" />
    </AspectRatio>
    <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
      <div className="flex flex-col gap-4">
        <RestaurantInfoSkeleton />
        <Skeleton className="h-8 w-16" />
        <MenuItemSkeleton />
        <MenuItemSkeleton />
        <MenuItemSkeleton />
      </div>
      <OrderSummarySkeleton />
    </div>
  </div>
);
