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
      <div>
        Page {currentPage} of {totalPages}
      </div>
      <div>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
        >
          Prev
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
