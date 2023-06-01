import React from "react";

const Pagination = ({
  rocketsPerPage,
  totalRockets,
  currentPage,
  paginate,
}) => {
  const pageNumbers = Math.ceil(totalRockets / rocketsPerPage);

  if (pageNumbers === 1) {
    return null;
  }

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {currentPage > 1 && (
          <li>
            <a
              href="/"
              onClick={() => paginate(currentPage - 1)}
              className="pagination-btn"
            >
              Prev
            </a>
          </li>
        )}

        {Array.from({ length: pageNumbers }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <li key={pageNumber}>
              <a
                href="/"
                onClick={() => paginate(pageNumber)}
                className={`pagination-btn${
                  pageNumber === currentPage ? " active" : ""
                }`}
              >
                {pageNumber}
              </a>
            </li>
          );
        })}

        {currentPage < pageNumbers && (
          <li>
            <a
              href="#!"
              onClick={() => paginate(currentPage + 1)}
              className="pagination-btn"
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
