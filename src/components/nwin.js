import React from 'react'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import './nwin.css'

const Nwin = () => {

  
    const user = useSelector(selectUser);
    return (
      
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
      <button type="submit">Submit</button>
      
      </div>
    )

 
 
}

export default Nwin;
