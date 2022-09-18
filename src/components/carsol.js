import React, { useEffect, useState } from 'react'
import './carsol.css'


const Carsol = () => {
    let number=0
    const [tableData, setTableData] = useState([])
    

    useEffect(() => {
        getAllData();
      }, [])

    
    const getData=()=>{
        fetch(`http://localhost:3600/api/carousel/all`)
        .then((data) => data.json())
        .then((data) => setTableData(data))
    }

    //get all urls,titles and subTitles
    const allURL = tableData.map(urlArray => urlArray.url);
    const allTitles = tableData.map(titllesArray => titllesArray.title);
    const allSubTitles = tableData.map(subTitlesArray => subTitlesArray.subTitle);
   /* */
   const url1=allURL[2]
  
   const getAllData=()=>{
        getData();
    }

    const leftSlid=()=>{
        if (number<=4 && number>0){
            number++
        }
        
        
    }

    const rightSlid=()=>{
        if (number<=4 && number>0){
            number--
        }
    }

    
  return (
  <div>
    <i className ="arrow left" onClick={()=>leftSlid()}></i>

     <img src={allURL[number]} alt="new"/>
     <p>{allTitles[number]}</p>
     <p>{allSubTitles[number]}</p>

     <i className="arrow right" onClick={()=>rightSlid()}></i>
</div>
  )
}

export default Carsol