import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Skeleton,
} from "@/components/ui";
import { ManageRestaurantSchema } from "@/validationSchemas/manageRestaurant";
import { useFormContext } from "react-hook-form";

type MenuItemInputProps = {
  index: number;
  onRemoveItem: () => void;
};

export const MenuItemInput = ({ index, onRemoveItem }: MenuItemInputProps) => {
  const { control, formState } = useFormContext<ManageRestaurantSchema>();

  return (
    <div className="flex flex-row items-end gap-2">
      <div>
        <FormField
          control={control}
          name={`menuItems.${index}.name`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name {formState.errors?.["menuItems"]?.[index]?.name?.message}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Cheese Pizza"
                  disabled={formState.isSubmitting}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Price ($){" "}
              {formState.errors?.["menuItems"]?.[index]?.price?.message}
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="8.00"
                disabled={formState.isSubmitting}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="button"
        disabled={formState.isSubmitting}
        onClick={onRemoveItem}
        className="bg-red-500 max-h-fit"
      >
        Remove
      </Button>
    </div>
  );
};

export const MenuItemInputSkeleton = () => (
  <div className="flex flex-row items-end gap-x-1">
    <div className="space-y-1">
      <Skeleton className="h-[12px] w-10" />
      <Skeleton className="h-9 w-[184px]" />
    </div>
    <div className="space-y-1">
      <Skeleton className="h-[12px] w-14" />
      <Skeleton className="h-9 w-[184px]" />
    </div>
    <Skeleton className="h-9 w-20" />
  </div>
);
