import React from 'react'
import { useState } from 'react';
import {submit} from './features/userSlice';
import { useDispatch } from 'react-redux';


const Patient = () => {

    var error = false;


    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [address,setAddress] = useState("");
    const [occupation,setOccupation] = useState("");
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);
    const [name_of_hospital,setHospital] = useState("");
    const [state,setState] = useState("");
    const [consultant_surgeon,setSurgeon] = useState("");
    
    
    


   

    const dispatch = useDispatch();

    const handleClick = (e) => {
      e.preventDefault();

     

      dispatch(submit({
        name:name,
        age:age,
        address:address,
        occupation:occupation,
        height:height,
        weight:weight,
        name_of_hospital:name_of_hospital,
        state:state,
        consultant_surgeon:consultant_surgeon,
      })); 
 
     }

     function handle() {
        if(name && age && address && height && weight && name_of_hospital && state){
            console.log("Success")
        }
        else{
            error = true;
        }
     }

     


  return (
    <div>
      <form onSubmit={handle()}> 
    <div className='box'>
          <div class="form-group">
       <h1 class="header1"> Patient Details</h1>
        <label for="subject"  class="name_field"><b>Name:</b><span style={{color:"red"}}>*</span></label>
        <textarea id="subject" value={name} onChange={(e) => {setName(e.target.value)}}  placeholder="Enter your Name.." required></textarea>
      </div>
      {error?<label id="gap"><span style={{color:"red",marginLeft:80}}>This field is required</span></label>:""}
    <br />
      <div>  <label><b>Age/Sex :</b><span style={{color:"red"}}>*</span></label> <textarea value={age} onChange={(e) => setAge(e.target.value)}id="subject" name="subject" placeholder="Enter your Age.." required></textarea> </div>
      {error?<label id="gap"><span style={{color:"red",marginLeft:80}}>This field is required</span></label>:""} <br />
       <div> <label><b>Address :</b><span style={{color:"red"}}>*</span></label> <textarea id="subject" value={address} onChange={(e) => setAddress(e.target.value)} name="subject" placeholder="Enter your Address.." required></textarea></div>
       {error?<label id="gap"><span style={{color:"red",marginLeft:80}}>This field is required</span></label>:""} <br />
      <div>  <label><b>Occupation :</b></label> <textarea value={occupation} onChange={(e) => setOccupation(e.target.value)} id="subject" class="occ" name="subject"required></textarea></div>
      <div> <label><b>Height :</b><span style={{color:"red"}}>*</span></label> <input value={height} onChange={(e) => setHeight(e.target.value)} type = "number"  placeholder='in cm'></input>
        <label  class="space"><b>Weight :</b><span style={{color:"red"}}>*</span></label> <input value={weight} onChange={(e) => setWeight(e.target.value)} type = "number" placeholder='in cm'></input></div> <br />
        <div><label><b>Name of Hospital:</b><span style={{color:"red"}}>*</span></label> <textarea value={name_of_hospital} onChange={(e) => setHospital(e.target.value)} class="spl"id="subject"  name="subject"required></textarea></div>
        {error?<label id="gap"><span style={{color:"red",marginLeft:130}}>This field is required</span></label>:""}<br />
        <div><label><b>State :</b><span style={{color:"red"}}>*</span></label> <textarea value={state} onChange={(e) => setState(e.target.value)} id="subject"class="spl1"  name="subject"required></textarea></div> 
        {error?<label id="gap"><span style={{color:"red",marginLeft:60}}>This field is required</span></label>:""}<br />
       <div> <label><b>Consultant Surgeon :</b></label> <textarea value={consultant_surgeon} onChange={(e) => setSurgeon(e.target.value)} id="subject" class="spl2" name="subject"required></textarea></div>
        </div> 
        <br />
  
        </form> 
        
        <input type="submit" id="l_btn" value="Check" onClick={(e) => handleClick(e)}></input>
    </div>
  )
}

export default Patient
