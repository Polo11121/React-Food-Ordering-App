import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@/components/ui";
import { ManageRestaurantSchema } from "@/validationSchemas/manageRestaurant";
import { useFormContext } from "react-hook-form";

export const ImageSection = () => {
  const { control } = useFormContext<ManageRestaurantSchema>();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Image</h2>
        <FormDescription>
          Add and image that will be displayed on your restaurant listing in the
          search results. Adding new image will overwrite the existing one.
        </FormDescription>
      </div>
      <div className="flex flex-col gap-8 w-[50%]">
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
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={uploadImageHandler}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </div>
    </div>
  );
};
