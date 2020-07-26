import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => (
        <span
          onClick={() => onPageChanged(p)}
          className={p === currentPage && styles.selectedPage}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
