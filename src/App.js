import React from 'react'
import './css/styles.css'



const App = () => {
  return (
    <div>
    <div>
    <h1 class="header">Questionnarie For Open Fracture</h1>
    </div>

    <div  className="full">
    <div className='box'>
       <div class="form-group">
       <h1 class="header1"> Patient Details</h1>
        <label for="subject"  class="name_field"><b>Name:</b><span style={{color:"red"}}>*</span></label>
        <textarea id="subject"  name="subject" placeholder="Enter your Name.." required></textarea>
      </div>
    <br />
      <div>  <label><b>Age/Sex :</b><span style={{color:"red"}}>*</span></label> <textarea id="subject" name="subject" placeholder="Enter your Age.." required></textarea> </div> <br />
       <div> <label><b>Address :</b><span style={{color:"red"}}>*</span></label> <textarea id="subject" name="subject" placeholder="Enter your Address.." required></textarea></div><br />
      <div>  <label><b>Occupation :</b></label> <textarea id="subject" class="occ" name="subject"required></textarea></div>
      <div> <label><b>Height :</b><span style={{color:"red"}}>*</span></label> <input type = "number"  placeholder='in cm'></input>
        <label  class="space"><b>Weight :</b><span style={{color:"red"}}>*</span></label> <input type = "number" placeholder='in cm'></input></div> <br />
        <div><label><b>Name of Hospital:</b><span style={{color:"red"}}>*</span></label> <textarea class="spl"id="subject"  name="subject"required></textarea></div><br />
        <div><label><b>State :</b><span style={{color:"red"}}>*</span></label> <textarea id="subject"class="spl1"  name="subject"required></textarea></div> <br />
       <div> <label><b>Consultant Surgeon :</b><span style={{color:"red"}}>*</span></label> <textarea id="subject" class="spl2" name="subject"required></textarea></div>
        </div> 
        <div className='col'>
        <div>
        <h2 style={{marginLeft:100}}>Time of injury :</h2>
        <div className="container"> 
        <div> 
        <label for="cell"id="label">
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">Morning </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">Afternoon </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">Evening </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">Nigh-time </span>
        </label>
        </div>
        </div>
        </div>

        <div>
        <h2 style={{marginLeft:100}}>Time of Arrival : <p style={{fontSize:20}}>To Hospital (after injury)</p></h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Less than 2hours </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">2-6 hours </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">6-24 hours </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Greater than 24hours </span>
        </label>
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Gap Till Primary Debridement:</h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Less than 6hours </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">6-12 hours </span>
        </label>
       
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Greater than 12hours </span>
        </label>
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Mode of Injury : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> High Energy  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Low Energy </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">Crush Injury </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Farmyard Injury </span>
        </label>
        </div>
        </div>
        </div>

        <h1  style={{marginLeft:100}}>Type Of Injury</h1>

        <div>
        <h2 style={{marginLeft:100}}>Wound Size : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Less than 1 cm  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 1-10 cm </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">Greater Than 10 cm </span>
        </label>
        </div>
        </div>
        </div>

        <div>
        <h2 style={{marginLeft:100}}>Crushing  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Simple </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Segmental </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">Crush Injury </span>
        </label>
        </div>
        </div>
        </div>

        <div>
        <h2 style={{marginLeft:100}}>Contamination  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> No </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Mild </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Significant </span>
        </label>
        </div>
        </div>
        </div>

        <div>
        <h2 style={{marginLeft:100}}>Nereve Injury  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> No </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Yes </span>
        </label>
        </div>
        </div>
        </div>

        <div>
        <h2 style={{marginLeft:100}}>Vascular Injury  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> No </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Yes </span>
        </label>
        </div>
        </div>
        </div>


        <h1 style={{marginLeft:100}}>Fracture Classification</h1>

        <div>
        <h2 style={{marginLeft:100}}>Upper Limb : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Shoulder  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Arm </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Elbow </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Forearm </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Wrist </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Hand </span>
        </label>
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Lower Limb : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Pelvis  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Hip </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Thigh </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Knee </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Leg </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Foot </span>
        </label>
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Gustilo Anderson Classification : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> I  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> II </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> IIIA </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> IIIB </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> IIIC </span>
        </label>
        </div>
        </div>
        </div>

        <h1 style={{marginLeft:100}}>Ganga Score :</h1>

        <div>
        <h2 style={{marginLeft:100}}>Skin and Fascia : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 1  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 2 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 3 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 4 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 5 </span>
        </label>
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Musc. & Nerve Unit : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 1  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 2 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 3 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 4 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 5 </span>
        </label>
        </div>
        </div>
        </div>



        <div>
        <h2 style={{marginLeft:100}}>Skeletal Structure : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 1  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 2 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 3 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 4 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 5 </span>
        </label>
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Co-Morbidity Score : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 0  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 2-4 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 4-8 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 8-14 </span>
        </label>
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Skeletal Trauma : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Ipsilateral Same Limb  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Ipsilateral Other Limb </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Other </span>
        </label>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",top:40,right:320, backgroundColor:"transparent",color:"white"}}></textarea>
       
        </div>
        </div>
        </div>
       <br></br>
       <br></br>

        <div>
        <h2 style={{marginLeft:100}}>Associated Injury : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Head Injury  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Chest Injury</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Abd Injury</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Hypo Tension</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Other </span>
        </label>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",top:40,right:320, backgroundColor:"transparent",color:"white"}}></textarea>
       
        </div>
        </div>
        </div>
        <br></br>
       <br></br>
      



        <div>
        <h2 style={{marginLeft:100}}>Associated Medical : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> DM  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> HTN</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Cardiac Illness</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Respiratory Illness</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">  Epilesy</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Other </span>
        </label>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",top:20,left:100, backgroundColor:"transparent",color:"white"}}></textarea>
       
        </div>
        </div>
        </div>
        <br></br>
       <br></br>

      <h1 style={{marginLeft:100, color:'#cd104'}}>Managment Profile</h1>

      <div>
        <h2 style={{marginLeft:100}}>Pre Hospitalm Care  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Given </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Not Given </span>
        </label>
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Initial Managment  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Fluid Wash </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> POP </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> External Fixator </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Primary Sx </span>
        </label>
        </div>
        </div>
        </div>



        <div>
        <h2 style={{marginLeft:100}}>Total Blood Transfusion  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Nil </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 1-2 packs </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Greater than 2 packs </span>
        </label>
        
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Antibiotics  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> None </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Single Antibiotic </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Double Antibiotic </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Triple Antibiotic </span>
        </label>
        </div>
        </div>
        </div>

        <div>
        <h2 style={{marginLeft:100}}>Surgical  Debridement: </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Conservative </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Wash </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Radical </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Other </span>
        </label>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",top:20,left:530, backgroundColor:"transparent",color:"white"}}></textarea>
       
        </div>
        </div>
        </div>

        <div>
        <h2 style={{marginLeft:100}}>Duration Of Surgery  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Less Than 1 hour </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 1-2 hrs </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Greater Than 2 hours </span>
        </label>
        
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Blood Loss  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Less Than 100 ml </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> 100-200 ml </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Greater Than 200 ml </span>
        </label>
        
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Implant Used  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> None </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">EX. Fix </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Plating </span>
        </label>

        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Nailing </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Other </span>
        </label>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>
       
        
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Soft Tissue Procedure : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Yes </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> No </span>
        </label>
        
        </div>
        </div>
        </div>

        <div>
        <h2 style={{marginLeft:100}}>Intra-Op Complication: </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Vascular Injury </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Nerve Injury </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Tendon </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Bone Loss </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Other </span>
        </label>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>
       
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Local Post-Op Complication  : </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> None </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">Mild Infection </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Severe Infection </span>
        </label>
        
        </div>
        </div>
        </div>


        <div>
        <h2 style={{marginLeft:100}}>Post-Op Complication: </h2>
        <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> None</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> ARDS </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Pul. Embolism </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> ARF </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Vascular Injury </span>
        </label>
        <label>
        

        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span"> Other </span>
        </label>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>
       
        </div>
        </div>
        </div>



        <input type="submit" value="Submit" />





      </div>
        </div>
        </div>

        
        
 
  )
}

export default App;