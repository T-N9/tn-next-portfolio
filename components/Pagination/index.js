import React from "react";

import Link from "next/link";

import "css.gg/icons/css/arrow-left.css";
import "css.gg/icons/css/arrow-right.css";

const Pagination = ({ pageNumber, pages, noItems }) => {
  return (
    <div className="pagination_wrapper">
      {pageNumber !== 1 && (
        <Link href={`/writing?page=${pageNumber - 1}`}>
          <button>
            <i className="gg-arrow-left"></i>
          </button>
        </Link>
      )}

      <div className="page_numbers">
        {new Array(noItems > 0 ? pages + 1 : pages)
          .fill()
          .map((item, index) => {
            return (
              <Link key={index} href={`/writing?page=${index + 1}`}>
                <p
                  className={`page_numbers--item ${
                    pageNumber === index + 1 && "active"
                  }`}
                >
                  {index + 1}
                </p>
              </Link>
            );
          })}
      </div>

      {noItems > 0 && pageNumber < pages + 1 && (
        <Link href={`/writing?page=${pageNumber + 1}`}>
          <button>
            <i className="gg-arrow-right"></i>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
