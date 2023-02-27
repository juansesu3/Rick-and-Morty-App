import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

const Pagination = ({ info, setPageNumber, pageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  let updateDimesion = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimesion);
    return () => window.removeEventListener('resize', updateDimesion);
  }, []);
  return (
    <>
      <style jsx>
        {`
        @media (max-width: 768px){
          .next, .prev{
            display: none;
          }
          .pagination{
            font-size: 14px;

          }

        }
         `
        }
      </style>

      <ReactPaginate
        className={`pagination justify-content-center gap-4 my-4 text-decoration-none text-pagination `}
        nextLabel='Next'
        nextClassName={`btn btn-secondary ${styles.text} next`}
        previousLinkClassName={` ${styles.text} prev`}
        nextLinkClassName={` ${styles.text}`}
        previousLabel='Prev'
        previousClassName={`btn btn-secondary ${styles.text}`}
        pageClassName='page-item'
        pageLinkClassName={`page-link btn btn-outline-dark ${styles.pagBtn}`}
        breakClassName='text-light fw-bold'
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName='active'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        onPageChange={(data) => { setPageNumber(data.selected + 1) }}
        pageCount={info?.pages}
      />
    </>
    
  )
}

export default Pagination