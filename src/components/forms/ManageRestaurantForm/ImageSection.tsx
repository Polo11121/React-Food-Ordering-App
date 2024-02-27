import {
  AspectRatio,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Skeleton,
} from "@/components/ui";
import { ManageRestaurantSchema } from "@/validationSchemas/manageRestaurant";
import { useFormContext } from "react-hook-form";

export const ImageSection = () => {
  const { control, watch, formState } =
    useFormContext<ManageRestaurantSchema>();

  const existingImageUrl = watch("imageUrl");
  const showError = !existingImageUrl && formState.isSubmitted;

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Image</h2>
        <FormDescription>
          Add and image that will be displayed on your restaurant listing in the
          search results. Adding new image will overwrite the existing one.
        </FormDescription>
      </div>
      <div className="flex flex-col gap-8 md:w-[50%]">
        {existingImageUrl && (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existingImageUrl}
              alt="restaurant-image"
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        )}
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => {
            const uploadImageHandler = (
              event: React.ChangeEvent<HTMLInputElement>
            ) =>
              field.onChange(event.target.files ? event.target.files[0] : null);

            return (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={formState.isSubmitting}
                    className="cursor-pointer"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={uploadImageHandler}
                  />
                </FormControl>
                {showError && !field.value && (
                  <FormMessage>
                    Either image URL or image File must be provided
                  </FormMessage>
                )}
              </FormItem>
            );
          }}
        />
      </div>
    </div>
  );
};

export const ImageSectionSkeleton = () => (
  <div className="space-y-2">
    <div className="space-y-1">
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-5 max-w-[760px]" />
    </div>
    <Skeleton className="h-9 max-w-[50%]" />
  </div>
);
