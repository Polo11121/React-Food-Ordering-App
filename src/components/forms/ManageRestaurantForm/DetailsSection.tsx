import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Skeleton,
} from "@/components/ui";
import { ManageRestaurantSchema } from "@/validationSchemas/manageRestaurant";
import { useFormContext } from "react-hook-form";

export const DetailsSection = () => {
  const { control, formState } = useFormContext<ManageRestaurantSchema>();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Details</h2>
        <FormDescription>
          Enter the details about your restaurant
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name {formState.errors[field.name]?.message}</FormLabel>
            <FormControl>
              <Input {...field} disabled={formState.isSubmitting} />
            </FormControl>
          </FormItem>
        )}
      />
      <div className="flex gap-4 items-end">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>
                City {formState.errors[field.name]?.message}
              </FormLabel>
              <FormControl>
                <Input {...field} disabled={formState.isSubmitting} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>
                Country {formState.errors[field.name]?.message}
              </FormLabel>
              <FormControl>
                <Input {...field} disabled={formState.isSubmitting} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name="deliveryPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Delivery Price ($) {formState.errors[field.name]?.message}
            </FormLabel>
            <FormControl className="max-w-[25%]">
              <Input
                {...field}
                placeholder="1.50"
                disabled={formState.isSubmitting}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="estimatedDeliveryTime"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Estimated Delivery Price (minutes){" "}
              {formState.errors[field.name]?.message}
            </FormLabel>
            <FormControl className="max-w-[25%]">
              <Input
                {...field}
                placeholder="30"
                disabled={formState.isSubmitting}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export const DetailsSectionSkeleton = () => (
  <div className="space-y-2">
    <div className="space-y-1">
      <Skeleton className="h-9 w-24" />
      <Skeleton className="h-5 w-56" />
    </div>
    <div className="space-y-1">
      <Skeleton className="h-5 w-12" />
      <Skeleton className="h-9" />
    </div>
    <div className="flex gap-4">
      <div className="space-y-1 flex-1">
        <Skeleton className="h-5 w-10" />
        <Skeleton className="h-9" />
      </div>
      <div className="space-y-1 flex-1">
        <Skeleton className="h-5 w-14" />
        <Skeleton className="h-9" />
      </div>
    </div>
    <div className="space-y-1 w-[25%]">
      <Skeleton className="h-5 w-28" />
      <Skeleton className="h-9" />
    </div>
    <div className="space-y-1 w-[25%]">
      <Skeleton className="h-5 w-52" />
      <Skeleton className="h-9" />
    </div>
  </div>
);
