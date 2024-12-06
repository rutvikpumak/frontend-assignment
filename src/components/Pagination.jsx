import React from "react";
import "../styles/Pagination.css";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav className="pagination" aria-label="Pagination navigation">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        Prev
      </button>

      {currentPage > 1 && (
        <>
          <button onClick={() => onPageChange(1)} aria-label="Go to first page">
            1
          </button>
          <span>...</span>
        </>
      )}

      <button
        className="active"
        aria-current="page"
        aria-label={`Currently on page ${currentPage}`}
      >
        {currentPage}
      </button>

      {currentPage < totalPages && (
        <>
          <span>...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            aria-label="Go to last page"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
