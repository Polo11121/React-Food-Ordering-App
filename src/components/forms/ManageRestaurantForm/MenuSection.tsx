import {
  Button,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Skeleton,
} from "@/components/ui";
import {
  MenuItemInput,
  MenuItemInputSkeleton,
} from "@/components/forms/ManageRestaurantForm";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ManageRestaurantSchema } from "@/validationSchemas/manageRestaurant";

export const MenuSection = () => {
  const { control } = useFormContext<ManageRestaurantSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  const addHandler = () => append({ name: "", price: 0 });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>
          Create your menu and give each item a name and a price
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => {
              const removeHandler = () => remove(index);

              return (
                <MenuItemInput index={index} onRemoveItem={removeHandler} />
              );
            })}
            {!fields.length && <FormMessage />}
          </FormItem>
        )}
      />
      <Button type="button" onClick={addHandler}>
        Add Menu Item
      </Button>
    </div>
  );
};

export const MenuSectionSkeleton = () => (
  <div className="space-y-2">
    <div className="space-y-1">
      <Skeleton className="h-8 w-24" />
      <Skeleton className="h-5 w-80" />
    </div>
    <MenuItemInputSkeleton />
    <MenuItemInputSkeleton />
    <MenuItemInputSkeleton />
    <Skeleton className="h-9 w-[132px]" />
  </div>
);
