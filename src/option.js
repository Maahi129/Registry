import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import s1 from './static/popin.mp3';
// import s2 from './static/popout.mp3';
// import {  login } from './features/userSlice';
import  { login } from './features/userSlice';



const Option = (props) => {

  

  const dispatch = useDispatch();
  const [first, setFirst] = useState(true);
   
  const handleChange = () => {
     if(first === true){
       dispatch(login({
        one:first
       }))
     }
  }
  



  return (
    
    <div>
   
    <h2 style={{marginLeft:100}}>{props.head}:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={first}
        onChange={() => handleChange()}
      
        
      
        /> <span id="span">{props.one} </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   
        
        /> <span id="span">{props.two} </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  
        /> <span id="span">{props.three} </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  
       /> <span id="span">{props.four} </span>
        </label>
        </div>
        </div>
       
    </div>
   
  )
}

export default Option


















  // const sound = () => {
    //   var audio = new Audio(s1);
    //   audio.play();
    // }
    // const playOff = () => {
    //   var audio = new Audio(s2);
    //   audio.play();
    // }

    // if(one === true) {
      
    //   sound();
      
    // }else{
    //   playOff();
    // }