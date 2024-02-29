import {
  SearchRestaurantsSchema,
  searchRestaurantsSchema,
} from "@/validationSchemas/searchRestaurants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
} from "@/components/ui";
import { Search } from "lucide-react";
import classNames from "classnames";

type SearchBarProps = {
  onSubmit: (formData: SearchRestaurantsSchema) => void;
  placeholder: string;
  onReset?: () => void;
};

export const SearchBar = ({
  onSubmit,
  placeholder,
  onReset,
}: SearchBarProps) => {
  const form = useForm<SearchRestaurantsSchema>({
    resolver: zodResolver(searchRestaurantsSchema),
  });

  const submitHandler = form.handleSubmit(onSubmit);

  const resetHandler = () => {
    form.reset({
      searchQuery: "",
    });

    onReset?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={submitHandler}
        className={classNames(
          "flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3",
          {
            "border-red-500": form.formState.errors.searchQuery,
          }
        )}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />
        <FormField
          name="searchQuery"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl focus-visible:ring-0 placeholder:opacity-0 sm:placeholder:opacity-100"
                  placeholder={placeholder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {form.formState.isDirty && (
          <Button
            onClick={resetHandler}
            variant="outline"
            className="rounded-full"
            type="button"
          >
            Clear
          </Button>
        )}
        <Button type="submit" className="rounded-full bg-orange-500">
          Search
        </Button>
      </form>
    </Form>
  );
};
