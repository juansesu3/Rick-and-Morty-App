import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, setPageNumber, pageNumber }) => {
    /*let next = ()=>{
        setPageNumber((x) =>x+1)
    };
    let prev = ()=>{
      if(pageNumber === 1) return;
        setPageNumber((x) =>x-1)
    };*/
  return (

    <ReactPaginate pageCount={info.pages}/>
    /*<div className='container d-flex justify-content-center gap-5 my-5'> 
    <button type="button" onClick={prev} className='btn btn-primary' >Previous</button> 
    <button type="button" onClick={next} className='btn btn-primary' >Next</button>
    </div>*/
  )
}

export default Pagination