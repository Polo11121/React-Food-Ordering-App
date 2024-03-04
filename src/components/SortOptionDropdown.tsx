import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Skeleton,
} from "@/components/ui";
import { SORT_OPTIONS } from "@/lib/restaurantOptionsConfig";

type SortOptionDropdownProps = {
  onChange: (value: string) => void;
  sortOption: string;
};

export const SortOptionDropdown = ({
  onChange,
  sortOption,
}: SortOptionDropdownProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="cursor-pointer" asChild>
      <Button variant="outline">
        Sort by:{" "}
        {SORT_OPTIONS.find((option) => option.value === sortOption)?.label}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {SORT_OPTIONS.map(({ label, value }) => {
        const clickHandler = () => onChange(value);

        return (
          <DropdownMenuItem
            key={label}
            className="cursor-pointer"
            onClick={clickHandler}
          >
            {label}
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  </DropdownMenu>
);

export const SortOptionDropdownSkeleton = () => (
  <Skeleton className="h-8 w-40" />
);
