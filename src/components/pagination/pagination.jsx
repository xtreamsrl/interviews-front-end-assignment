import { useState } from 'react';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, setCurrentPage, postPerPage, totalPosts }) => {
  const pageNumbers = [];
  const totalPages = totalPosts / postPerPage;

  //limit the page Numbers shown
  const [pageNumberlimit] = useState(5);
  const [maxPageNumberlimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberlimit, setMinPageNumberLimit] = useState(0);

  // Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // GO to next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    // Show next set of pageNumbers
    if (currentPage + 1 > maxPageNumberlimit) {
      setMaxPageNumberLimit(maxPageNumberlimit + pageNumberlimit);
      setMinPageNumberLimit(minPageNumberlimit + pageNumberlimit);
    }
  };

  // GO to prev page
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    // Show prev set of pageNumbers
    if ((currentPage - 1) % pageNumberlimit === 0) {
      setMaxPageNumberLimit(maxPageNumberlimit - pageNumberlimit);
      setMinPageNumberLimit(minPageNumberlimit - pageNumberlimit);
    }
  };

  for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.pagination}>
      <li
        onClick={paginatePrev}
        className={currentPage === pageNumbers[0] ? `${styles.hidden}` : null}
      >
        Prev
      </li>

      {pageNumbers.map((number) => {
        return (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? `${styles.active}` : null}
          >
            {number}
          </li>
        );
      })}

      <li
        onClick={paginateNext}
        className={currentPage === pageNumbers[pageNumbers.length - 1] ? `${styles.hidden}` : null}
      >
        Next
      </li>

      <p>
        <b className={styles.page}>{`page ${currentPage}`}</b>
        <span>{` of `}</span>
        <b>{`${Math.ceil(totalPages)}`}</b>
      </p>
    </ul>
  );
};

export default Pagination;
