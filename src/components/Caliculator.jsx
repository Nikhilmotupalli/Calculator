import { useState } from 'react'
import Keyboard from './Keyboard'
import Display from './Display'

const Caliculator = () => {
    const [data,setData]=useState(0)
    // function to handle the user input
    function handleClick(e){
        console.log(e.target.value)
        let curVal=e.target.value 

        // updating the dispaly based on user input
        if(data===0){
            setData(curVal)
        }else{
            setData(prev=>prev+""+curVal)
        }
        // calculating the results 
        if(curVal== "="){
            let result=eval(data)
            setData(result)
        }else if(curVal=="AC"){
            setData(0)
        }else if(curVal=="C"){
            let sval=data  
            // this is the value that is present in the dispaly
            // console.log(sval.slice())
            if(sval.length>1){
            setData(sval.slice(0,sval.length-1))

            }
        }




    }
  return (
    <div>
        <div className="card my-3 mx-auto" style={{width:"250px"}}>
        <Display data={data}/>
        <div className="card-body">
        <Keyboard onClick={handleClick}/>
        </div>
        </div>
       
      
    </div>
  )
}

export default Caliculator
