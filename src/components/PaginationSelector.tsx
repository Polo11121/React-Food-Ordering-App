import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui";

type PaginationSelectorProps = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

export const PaginationSelector = ({
  page,
  pages,
  onPageChange,
}: PaginationSelectorProps) => {
  const pagesNumbers = [...Array(pages + 1).keys()].slice(1);

  const prevPageHandler = () => onPageChange(page - 1);
  const nextPageHandler = () => onPageChange(page + 1);

  return (
    <Pagination>
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={prevPageHandler} />
          </PaginationItem>
        )}
        {pagesNumbers.map((pageNumber) => {
          const isActive = pageNumber === page;
          const changePageHandler = () => onPageChange(pageNumber);

          return (
            <PaginationItem className="cursor-pointer" key={pageNumber}>
              <PaginationLink isActive={isActive} onClick={changePageHandler}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {page !== pages && (
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={nextPageHandler} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
