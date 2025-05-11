import { BUTTON_TYPE } from "../constant";

function Pagination({
  totalPage,
  activePage,
  isStart,
  isLast,
  handleButtonClick,
  handlePrevNext,
}) {
  return (
    <div className="container">
      <div className="pagination">
        <button
          onClick={() => handlePrevNext(BUTTON_TYPE.PREV)}
          className="prev"
          type="button"
          disabled={isStart}
        >
          Prev
        </button>
        <div className="pagebuttons" onClick={handleButtonClick}>
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
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;

