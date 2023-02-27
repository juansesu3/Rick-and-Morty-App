import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info
  console.log(name);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {

    (async () => {

      let data = await fetch(api).then(res => res.json(0));
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x)=>{
          return fetch(x).then(res=>res.json());
        })
      );
      setResults(a);

    })()

  }, [api]);


  return (
    <div className='container' >
      <div className='row mb-4' >
        <h1 className='text-center mb-4 text-light' >Episode: {" "}
          <span className='text-primary' >{name === '' ? 'Unknow' : name}</span>
        </h1>
        <h5 className='text-center  text-light' >
          Air Date: {air_date === '' ? 'Unknow' : air_date}
        </h5>
      </div>
      <div className='row' >
        <div className='col-3'>
          <div className='text-center mb-4 text-light' > <h4>Pick Episodes</h4>
          <InputGroup name='Episode' total={51} setID={setID} />
          </div>
         </div>
        <div className='col-8'>
          <div className='row'>
            <Cards page='/episodes/' results={results}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Episodes