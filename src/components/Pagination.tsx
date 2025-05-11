import { BUTTON_TYPE } from "../constant";
import type { ButtonTypeT } from "../types";

type PaginationT = {
  totalPage: number;
  activePage: number;
  isStart: boolean;
  isLast: boolean;
  handleButtonClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handlePrevNext: (buttonType: ButtonTypeT) => void;
};

function Pagination({
  totalPage,
  activePage,
  isStart,
  isLast,
  handleButtonClick,
  handlePrevNext,
}: PaginationT) {
  if (totalPage < 2) return null;
  return (
    <div className="container">
      <div className="pagination">
        <button
          onClick={() => handlePrevNext(BUTTON_TYPE.PREV)}
          className="prev"
          type="button"
          disabled={isStart}
          aria-label="Previous Page"
        >
          Prev
        </button>
        <div
          className="pagebuttons"
          onClick={handleButtonClick}
          aria-live="polite"
        >
          {Array(totalPage)
            .fill("")
            .map((_, index) => {
              return (
                <button
                  className={`currentPage ${
                    activePage === index ? "activeButton" : ""
                  }`}
                  type="button"
                  data-buttonId={index}
                  key={index}
                  aria-label={`Go to page ${index + 1}`}
                >
                  {index + 1}
                </button>
              );
            })}
        </div>
        <button
          onClick={() => handlePrevNext(BUTTON_TYPE.NEXT)}
          className="next"
          type="button"
          disabled={isLast}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;

