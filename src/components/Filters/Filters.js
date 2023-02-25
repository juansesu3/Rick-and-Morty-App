import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = () => {
  return (
    <div className='col-3' >
      <div className='text-ccenter text-light fw-bold fs-4 mb-2' >Filters</div>
      <div style={{cursor:'pointer'}} className='text-center text-light  text-decoration-underline mb-4' >Clear Filters</div>

      <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />




      </div>


    </div>
  )
}

export default Filters