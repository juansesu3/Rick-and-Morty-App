import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

const Pagination = ({ info, setPageNumber, pageNumber }) => {
    /*let next = ()=>{
        setPageNumber((x) =>x+1)
    };
    let prev = ()=>{
      if(pageNumber === 1) return;
        setPageNumber((x) =>x-1)
    };*/
  return (

    <ReactPaginate 
    className={`pagination justify-content-center gap-4 my-4 text-decoration-none text-pagination `}
    nextLabel='Next'
    nextClassName={`btn btn-primary ${styles.text}`}
    previousLinkClassName={` ${styles.text}`}
    nextLinkClassName={` ${styles.text}`}
    previousLabel='Prev'
    previousClassName={`btn btn-primary ${styles.text}`}
    pageClassName='page-item'
    pageLinkClassName='page-link'
    activeClassName='active'
    forcePage={pageNumber=== 1 ? 0: pageNumber - 1}
    onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
    pageCount={info?.pages}
    />
    /*<div className='container d-flex justify-content-center gap-5 my-5'> 
    <button type="button" onClick={prev} className='btn btn-primary' >Previous</button> 
    <button type="button" onClick={next} className='btn btn-primary' >Next</button>
    </div>*/
  )
}

export default Pagination