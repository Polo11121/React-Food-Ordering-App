import { useEffect } from "react";
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
  Skeleton,
} from "@/components/ui";
import { User } from "@/types";

type UserProfileFormProps = {
  onSubmit: (data: UpdateUserSchema) => void;
  isLoading: boolean;
  user?: User;
};

export const UserProfileForm = ({
  onSubmit,
  isLoading,
  user,
}: UserProfileFormProps) => {
  const form = useForm<UpdateUserSchema>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      ...user,
    },
  });

  const submitHandler = form.handleSubmit(onSubmit);

  useEffect(() => {
    if (user) {
      form.reset(user);
    }
  }, [user, form]);

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

export const UserProfileSkeleton = () => (
  <div className="space-y-4 bg-gray-50 rounded-lg md:p-10">
    <div className="space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-8 w-52" />
        <Skeleton className="h-5 w-72" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5 w-10" />
        <Skeleton className="h-9" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5 w-10" />
        <Skeleton className="h-9" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-9" />
        </div>
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-9" />
          <Skeleton className="h-9" />
        </div>
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-9" />
        </div>
      </div>
      <Skeleton className="h-9 w-20" />
    </div>
  </div>
);
