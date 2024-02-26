import { Button, Form, Separator } from "@/components/ui";
import {
  ManageRestaurantSchema,
  manageRestaurantSchema,
} from "@/validationSchemas/manageRestaurant";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CuisinesSection,
  DetailsSection,
  MenuSection,
  ImageSection,
  MenuSectionSkeleton,
  CuisinesSectionSkeleton,
  DetailsSectionSkeleton,
} from "@/components/forms/ManageRestaurantForm";

type ManageRestaurantFormProp = {
  isLoading: boolean;
};

export const ManageRestaurantForm = ({
  isLoading,
}: ManageRestaurantFormProp) => {
  const form = useForm<ManageRestaurantSchema>({
    resolver: zodResolver(manageRestaurantSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [
        {
          name: "",
          price: 0,
        },
      ],
    },
  });

  if (isLoading)
    return (
      <div className="space-y-8 bg-gray-50 p-10 rounded-lg">
        <DetailsSectionSkeleton />
        <Separator />
        <CuisinesSectionSkeleton />
        <Separator />
        <MenuSectionSkeleton />
        <Separator />
      </div>
    );

  return (
    <Form {...form}>
      <form className="space-y-8 bg-gray-50 p-10 rounded-lg">
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
