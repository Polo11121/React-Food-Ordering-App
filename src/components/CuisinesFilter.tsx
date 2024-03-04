import { CUISINES_LIST } from "@/lib/restaurantOptionsConfig";
import { Button, Label } from "@/components/ui";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import classNames from "classnames";

type CuisinesFilterProps = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpand: () => void;
};

export const CuisinesFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpand,
}: CuisinesFilterProps) => {
  const resetHandler = () => onChange([]);

  const cuisines = isExpanded ? CUISINES_LIST : CUISINES_LIST.slice(0, 7);

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Cuisine</div>
        <div
          onClick={resetHandler}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset Filters
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        {cuisines.map((cuisine) => {
          const isSelected = selectedCuisines.includes(cuisine);

          const handleChange = () => {
            if (isSelected) {
              onChange(selectedCuisines.filter((c) => c !== cuisine));
            } else {
              onChange([...selectedCuisines, cuisine]);
            }
          };

          return (
            <div className="flex">
              <input
                type="checkbox"
                id={`cuisine-${cuisine}`}
                className="hidden"
                checked={isSelected}
                onChange={handleChange}
              />
              <Label
                htmlFor={`cuisine-${cuisine}`}
                className={classNames(
                  "flex flex-1 items-center justify-between cursor-pointer text-sm rounded-full px-4 py-2 font-semibold",

                  isSelected
                    ? "border border-green-600 text-green-600"
                    : "border border-slate-300"
                )}
              >
                {cuisine}
                {isSelected && <Check className="h-4 w-4" />}
              </Label>
            </div>
          );
        })}
        <Button
          variant="ghost"
          onClick={onExpand}
          className="mt-4 flex-1 rounded-full"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              Show Less <ChevronDown />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              Show More <ChevronUp />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};
