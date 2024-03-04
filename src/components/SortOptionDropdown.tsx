import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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
    <DropdownMenuTrigger className="cursor-pointer">
      <Button variant="outline" className="w-full">
        Sort by:{" "}
        {SORT_OPTIONS.find((option) => option.value === sortOption)?.label}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {SORT_OPTIONS.map(({ label, value }) => {
        const clickHandler = () => onChange(value);

        return (
          <DropdownMenuItem className="cursor-pointer" onClick={clickHandler}>
            {label}
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  </DropdownMenu>
);
