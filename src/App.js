import React from 'react';
import './css/styles.css';
import Option from './option';
import Patient from './patient';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Nwin from './components/nwin';


const App = () => {

  const user = useSelector(selectUser);
  return(

  <div> {user && user.name && user.age && user.address && user.height && user.weight && user.name_of_hospital && user.state ? <Nwin /> :  
    <div>
    <div>
    <h1 class="header">Questionnarie For Open Fracture</h1>
    </div>
  
    <div  className="full">
       <Patient />
        <div className='col' id='column'>
        <div>
        
        <Option 
          head="Time of Injury"
          one="Morning"
          two="Afternoon"
          three="Evening"
          four="Night"
        /></div>

        <div>
        <Option 
          head="Time of Arrival"
          one="Less than 2hours"
          two="2-6 hours"
          three="6-24 hours"
          four="Greater than 24hours"
        /></div>

       

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

      <Option 
        head="Mode of Injury :"
        one="High Energy "
        two="Low Energy"
        three="Crush Injury"
        four="Farmyard Injury"
      />
        

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

      </div>
      
        </div>
 
        
        </div>     
 
  

  }

</div>);
}


export default App;

 