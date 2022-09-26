import React, { useEffect, useState } from 'react'
import './carsol.css'


const Carsol = () => {
    const [number,setCounter]=useState(0)
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
   
    const noOfUrl=allURL.length
  
    const getAllData=()=>{
        getData();
    }

    const getArrowStatus=(currunt)=>{
        if(currunt<noOfUrl && currunt>0){
            return true
        }
        else{
            
            return false
        }
    }

    const leftSlid=()=>{
        console.log(noOfUrl)
        if(getArrowStatus){
            setCounter(number+1)   
        }
        console.log("boundary exceed")
        
    }

    const rightSlid=()=>{
        console.log(noOfUrl)
        if(getArrowStatus){
            setCounter(number-1)   
        }
        console.log("boundary exceed")   
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