import React, { useEffect, useState } from 'react'
import './carsol.css'


const Carsol = () => {
    const [number,setCounter]=useState(0)
    const [tableData, setTableData] = useState([])
    const [arrowStatusL, setArrowStatusL] = useState(true)
    const [arrowStatusR, setArrowStatusR] = useState(true)

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

        setArrowStatusL(true)
        setArrowStatusR(true)
        
        if(getArrowStatus){
            if(number===noOfUrl-2) {
                setArrowStatusL(false)
            }
            setCounter(number+1)    
            return true 
        }
        return false    
    }

    const rightSlid=()=>{
        
        setArrowStatusL(true)
        setArrowStatusR(true)
        
        if(getArrowStatus){
            if(number===noOfUrl-2) {
                setArrowStatusR(false)
            }
            setCounter(number-1)   
            return true 
        }
        return false  
    }

    
  return (
  <div style={{backgroundImage:`url(${allURL[number]})`}}>
    {
        arrowStatusL?<i className ="arrow left" onClick={()=>leftSlid()}></i>:null
    }
     
     <p>{allTitles[number]}</p>
     <p>{allSubTitles[number]}</p>
     {
        arrowStatusR?<i className="arrow right" onClick={()=>rightSlid()}></i>:null
     }    
    </div>
  )
}

export default Carsol