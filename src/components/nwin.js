import React, { useState } from 'react'
import { selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import './nwin.css'
import Success from './success';
import { login } from '../features/userSlice';



const Nwin = () => {

    const user = useSelector(selectUser);

    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleClick = (e) => {
      e.preventDefault();

      dispatch(login(
        error
      ))
      

    }

      return ( 
        <div>
        <form onSubmit={(e) => handleClick(e)}>
          {error? <Success /> :
          <div className='final_details'>
         <h1>Your Details :</h1>
          <h3> Name :  {user.name}  </h3>
          <h3> Age :  {user.age}  </h3>
          <h3>Address: {user.address}</h3>
          <h3>Height: {user.height} cm</h3>
          <h3>Weight: {user.weight} kg</h3>
          <h3>Name Of Hospital: {user.name_of_hospital}</h3>
          <h3>State: {user.state}</h3>
         
         <h2>Click Submit to Confirm :</h2>
         
     <input type="submit" id="l_btn1" name={error} value="Submit" onClick={()=>{
      
      fetch("http://localhost:5000/registry",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          name:user.name,
          age:user.age,
          address:user.address,
          height:user.height,
          weight:user.weight,
          state:user.state,
          name_of_hospital:user.name_of_hospital
        }),
      }).then((res)=>res.json())
        .then((data) => {
          console.log(data, "patientRegister");
        })

      setError(true)
     }}></input> 
         </div>
          }
          </form>
        </div>
       
         
         ); 
     
    
}

export default Nwin;
