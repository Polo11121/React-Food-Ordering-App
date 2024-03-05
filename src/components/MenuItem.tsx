import { MenuItem as MenuItemType } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@/components/ui";

type MenuItemProps = {
  item: MenuItemType;
  onAddItem: (item: MenuItemType) => void;
};

export const MenuItem = ({ item, onAddItem }: MenuItemProps) => {
  const addItemHandler = () => onAddItem(item);

  return (
    <Card
      onClick={addItemHandler}
      className="cursor-pointer hover:shadow-md hover:border-orange-500 hover:scale-[101%] transition-all tra"
    >
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        {(item.price / 100).toFixed(2)}$
      </CardContent>
    </Card>
  );
};

export const MenuItemSkeleton = () => <Skeleton className="h-36 rounded-xl" />;
