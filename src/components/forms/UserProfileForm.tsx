import {
  UpdateUserSchema,
  updateUserSchema,
} from "@/validationSchemas/updateUserProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";

type UserProfileFormProps = {
  onSubmit: (data: UpdateUserSchema) => void;
  isLoading: boolean;
};

export const UserProfileForm = ({
  onSubmit,
  isLoading,
}: UserProfileFormProps) => {
  const form = useForm<UpdateUserSchema>({
    resolver: zodResolver(updateUserSchema),
  });

  const submitHandler = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form
        onSubmit={submitHandler}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div className="space-y-3">
          <div>
            <h2 className="text-2xl font-bold">User Profile Form</h2>
            <FormDescription>
              View and change your profile information here
            </FormDescription>
          </div>
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} disabled className="bg-white" />
                </FormControl>
              </FormItem>
            )}
            control={form.control}
          />
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
          />
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <FormField
              name="addressLine1"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Address Line 1</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <FormField
              name="city"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <FormField
              name="country"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
          </div>
        </div>
        <Button type="submit" isLoading={isLoading} className="bg-orange-500">
          Submit
        </Button>
      </form>
    </Form>
  );
};
