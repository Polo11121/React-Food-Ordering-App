import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Skeleton,
} from "@/components/ui";
import { CUISINES_LIST } from "@/lib/restaurantOptionsConfig";
import { ManageRestaurantSchema } from "@/validationSchemas/manageRestaurant";
import { useFormContext } from "react-hook-form";
import {
  CuisineCheckbox,
  CuisineCheckboxSkeleton,
} from "@/components/forms/ManageRestaurantForm";

export const CuisinesSection = () => {
  const { control, formState } = useFormContext<ManageRestaurantSchema>();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <FormDescription>
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {CUISINES_LIST.map((cuisine) => (
                <CuisineCheckbox
                  isDisabled={formState.isSubmitting}
                  key={cuisine}
                  cuisine={cuisine}
                  field={field}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export const CuisinesSectionSkeleton = () => (
  <div className="space-y-2">
    <div className="space-y-1">
      <Skeleton className="h-8 w-24" />
      <Skeleton className="h-5 w-56" />
    </div>
    <div className="grid md:grid-cols-5 gap-x-1 gap-y-3">
      {CUISINES_LIST.map((cuisine) => (
        <CuisineCheckboxSkeleton key={cuisine} />
      ))}
    </div>
  </div>
);
