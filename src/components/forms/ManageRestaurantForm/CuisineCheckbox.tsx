import {
  Checkbox,
  FormControl,
  FormItem,
  FormLabel,
  Skeleton,
} from "@/components/ui";
import { ManageRestaurantSchema } from "@/validationSchemas/manageRestaurant";
import { ControllerRenderProps } from "react-hook-form";

type CuisineCheckboxProps = {
  field: ControllerRenderProps<ManageRestaurantSchema, "cuisines">;
  cuisine: string;
  isDisabled?: boolean;
};

export const CuisineCheckbox = ({
  field,
  cuisine,
  isDisabled,
}: CuisineCheckboxProps) => {
  const checkedChangeHandler = (checked: boolean) => {
    if (checked) {
      field.onChange([...field.value, cuisine]);
    } else {
      field.onChange(field.value.filter((value) => value !== cuisine));
    }
  };

  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          disabled={isDisabled}
          checked={field.value.includes(cuisine)}
          onCheckedChange={checkedChangeHandler}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal cursor-pointer">
        {cuisine}
      </FormLabel>
    </FormItem>
  );
};

export const CuisineCheckboxSkeleton = () => (
  <div className="flex flex-row gap-x-1">
    <Skeleton className="h-4 w-4" />
    <Skeleton className="h-4 w-16" />
  </div>
);
