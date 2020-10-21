import React from "react";
import styles from "./Paginator.module.css";
import { useState } from "react";
import cn from 'classnames';

type PropsType = {
  totalItemsCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
  portionSize?: number
}

const Paginator: React.FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const [currentPortion, setCurrentPortion] = useState(1);

  const portionsTotal = Math.ceil(pagesCount / portionSize);
  const firstPageOfPortion = (currentPortion - 1) * portionSize + 1;
  const lastPageOfPortion = currentPortion * portionSize;

  return (
    <div>
      {currentPortion > 1 && (
        <button onClick={() => setCurrentPortion(currentPortion - 1)}>
          prev
        </button>
      )}
      {pages
        .filter((p) => p >= firstPageOfPortion && p <= lastPageOfPortion)
        .map((p) => (
          <span
            onClick={() => onPageChanged(p)}
            className={cn({ [styles.selectedPage]: p === currentPage })}
          >
            {p}
          </span>
        ))}
      {currentPortion < portionsTotal && (
        <button onClick={() => setCurrentPortion(currentPortion + 1)}>
          next
        </button>
      )}
    </div>
  );
};

export default Paginator;
