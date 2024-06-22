import classes from "./Pagination.module.css";
import { PageButton } from "./PageButton";
import { BracketLeft, BracketRight } from "../../icons";

type PaginationProps = {
  currentPage: number;
  itemsLength: number;
  itemsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  scrollRef: React.MutableRefObject<null | HTMLDivElement>;
};

const Pagination = ({
  currentPage,
  itemsLength,
  itemsPerPage,
  setCurrentPage,
  scrollRef,
}: PaginationProps) => {
  const numberOfPages = Math.ceil(itemsLength / itemsPerPage);
  const numbersArray = Array.from(Array(numberOfPages), (_, x) => x + 1);

  const paginate = (page: string) => {
    // ASK: наверное, скролл лучше сделать в другом месте, а не в функции пагинации
    // Типо не смешивать логику
    // мб сделать onPageClick, которую повесить на <PageButton />
    // и там вызывать paginate() и scrollIntoView() ?
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });

    if (page === ">") {
      if (currentPage === numberOfPages) return;

      setCurrentPage(currentPage + 1);
      return;
    }

    if (page === "<") {
      if (currentPage === 1) return;

      setCurrentPage(currentPage - 1);
      return;
    }

    setCurrentPage(Number(page));
  };

  return (
    <div className={classes.pagination}>
      {currentPage !== 1 && (
        <PageButton paginate={() => paginate("<")}>
          <BracketLeft />
        </PageButton>
      )}

      {numbersArray.length > 1 &&
        numbersArray.map((value, i) => (
          <PageButton
            active={i + 1 === currentPage}
            key={i}
            paginate={paginate}
          >
            {value}
          </PageButton>
        ))}

      {currentPage < numberOfPages && (
        <PageButton
          disabled={currentPage === numberOfPages}
          paginate={() => paginate(">")}
        >
          <BracketRight />
        </PageButton>
      )}
    </div>
  );
};

export { Pagination };
