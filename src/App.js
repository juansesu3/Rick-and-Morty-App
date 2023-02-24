import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";

function App() {
  
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, updateFetchData] = useState([]);
  let {info, results} = fetchData;

  let api =  `https://rickandmortyapi.com/api/character?page=${pageNumber}`;


  useEffect(() =>{
   
    (async()=>{
      let data = await fetch(api).then(res=>res.json());   
      updateFetchData(data);
    })();
},[api]);



  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary" >App</span>
      </h1>
      <div className="container" >
        <div className="row" >
          <div className="col-3" >
            <Filters/>
          </div>
          <div className="col-8" >
            <div className="row" >
              <Cards results={results} />
             
              
            </div>
          </div>
           

        </div>

      </div>
    </div>
  );
}

export default App;
