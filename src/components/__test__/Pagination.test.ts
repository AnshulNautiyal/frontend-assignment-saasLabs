
// @ts-ignore
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";
import { BUTTON_TYPE } from "../../constant";

test("renders pagination buttons and handles page navigation", () => {
  const handleButtonClick = jest.fn();
  const handlePrevNext = jest.fn();

  render(
    <Pagination
      totalPage={5}
      activePage={2}
      isStart={false}
      isLast={false}
      handleButtonClick={handleButtonClick}
      handlePrevNext={handlePrevNext}
    />
  );

  // Check if Prev and Next buttons are rendered
  expect(screen.getByLabelText("Previous Page")).toBeInTheDocument();
  expect(screen.getByLabelText("Next Page")).toBeInTheDocument();

  // Check if correct page button is active
  expect(screen.getByText("3")).toHaveClass("activeButton");

  // Simulate button clicks
  fireEvent.click(screen.getByText("1"));
  expect(handleButtonClick).toHaveBeenCalledTimes(1);

  fireEvent.click(screen.getByLabelText("Next Page"));
  expect(handlePrevNext).toHaveBeenCalledWith(BUTTON_TYPE.NEXT);
});

