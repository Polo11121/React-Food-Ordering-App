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
  DetailsSectionSkeleton,
  CuisinesSectionSkeleton,
  MenuSectionSkeleton,
} from "@/components/forms/ManageRestaurantForm";

type ManageRestaurantFormProp = {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
};

export const ManageRestaurantForm = ({
  onSubmit,
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

  const submitHandler = form.handleSubmit((data: ManageRestaurantSchema) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("deliveryPrice", (data.deliveryPrice * 100).toString());
    formData.append(
      "estimatedDeliveryTime",
      data.estimatedDeliveryTime.toString()
    );
    data.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        (menuItem.price * 100).toString()
      );
    });
    data.cuisines.forEach((cuisine) => {
      formData.append("cuisines[]", cuisine);
    });

    if (data.imageFile) {
      formData.append("imageFile", data.imageFile);
    }

    onSubmit(formData);
  });

  return (
    <Form {...form}>
      <form
        onSubmit={submitHandler}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        <Button isLoading={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export const ManageRestaurantFormSkeleton = () => (
  <div className="space-y-8 bg-gray-50 p-10 rounded-lg">
    <DetailsSectionSkeleton />
    <Separator />
    <CuisinesSectionSkeleton />
    <Separator />
    <MenuSectionSkeleton />
    <Separator />
  </div>
);
