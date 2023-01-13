import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './card.css';
import img1 from '../images/doctor.jpg'
import img2 from '../images/circle.png'
import { useDispatch } from 'react-redux';
import { selectUser } from '../features/userSlice';


const Card = () => {

    const user = useSelector(selectUser);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    

  return (
    <div id='fulldivcard'>
      <div id='card-img'>
      <div class="img-card">
        <img id='mg-card' src={img1} alt=''></img>
        <span ><img id='spancard' alt='' src={img2}></img></span>
        </div>
      </div>
      <hr class="center-ball" />
        <div id='content-card'>
        <div class="condiv1">
         <h1>Your Details :</h1>
          <h3> Name :  {user.name}  </h3>
          <h3> Age :  {user.age}  </h3>
          <h3>Address: {user.address}</h3>
          <h3>Height: {user.height} cm</h3>
          </div>
          <div class="condiv2">
          <h3>Weight: {user.weight} kg</h3>
          <h3>Name Of Hospital: {user.name_of_hospital}</h3>
          <h3>State: {user.state}</h3>
          </div>
         <button name={error}  class="cardbtn"   onClick={()=>{
      
      // fetch("http://localhost:5000/registry",{
      //   method:"POST",
      //   crossDomain:true,
      //   headers:{
      //     "Content-Type":"application/json",
      //     Accept:"application/json",
      //     "Access-Control-Allow-Origin":"*",
      //   },
      //   body:JSON.stringify({
      //     name:user.name,
      //     age:user.age,
      //     address:user.address,
      //     height:user.height,
      //     weight:user.weight,
      //     state:user.state,
      //     name_of_hospital:user.name_of_hospital
      //   }),
      // }).then((res)=>res.json())
      //   .then((data) => {
      //     console.log(data, "patientRegister");
      //   })
      

      setError(true)
     }}>Submit</button>
</div>
         </div>
     
 
  )
}

export default Card