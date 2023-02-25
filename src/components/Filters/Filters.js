import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {

  let clear = () => {
    setStatus('')
    setPageNumber('')
    setGender('')
    setSpecies('')
    window.location.reload(false)
  }

  return (
    <div className='col-3' >
      <div className='text-ccenter text-light fw-bold fs-4 mb-2' >Filters</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className='text-center text-light  text-decoration-underline mb-4'
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  )
}

export default Filters