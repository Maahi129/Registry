import React from 'react';
import './css/styles.css';
import Option from './option';
import Patient from './patient';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Nwin from './components/nwin';
import Option3 from './option3';
import Option5 from './option5';
import Option2 from './option2';
import Option6 from './option6';


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
        <Option3 
          head="Gap Till Primary Debridement"
          one="Less than 6 hours"
          two="6-12 hours"
          three="Greater than 12hours"
        /></div>

       
      

        <div>
      <Option 
        head="Mode of Injury "
        one="High Energy "
        two="Low Energy"
        three="Crush Injury"
        four="Farmyard Injury"
      />
      </div>

        

        <h1  style={{marginLeft:100}}>Type Of Injury</h1>


        <div>
        <Option3 
          head="Wound Size"
          one="Less than 1 cm"
          two="1-10 cm"
          three="Greater Than 10 cm"
        /></div>


<div>
        <Option3 
          head="Crushing"
          one="Simple"
          two="Segmental"
          three="Crush Injury"
        /></div>

<div>
        <Option3 
          head="Contamination"
          one="No"
          two="Mild"
          three="Significant"
        /></div>


        <div>
        <Option2
        head="Nereve Injury"
        one="No"
        two="Yes"
        />
        </div>

        <div>
        <Option2
        head="Vascular Injury"
        one="No"
        two="Yes"
        />
        </div>

        <h1 style={{marginLeft:100}}>Fracture Classification</h1>

        <div>
      <Option6 
        head="Upper Limb "
        one="Shoulder "
        two="Arm"
        three="Elbow"
        four="Forearm"
        five="Wrist"
        six="Hand"
      />
      </div>

      <div>
      <Option6 
        head="Lower Limb "
        one="Pelvis "
        two="Hip"
        three="Thigh"
        four="Knee"
        five="Leg"
        six="Foot"
      />
      </div>
      
        <div>
      <Option5 
        head="Gustilo Anderson Classification "
        one="I "
        two="II"
        three="IIIA"
        four="IIIB"
        five="IIIC"
      />
      </div>


        <h1 style={{marginLeft:100}}>Ganga Score :</h1>


        <div>
      <Option5 
        head="Skin and Fascia "
        one="1 "
        two="2"
        three="3"
        four="4"
        five="5"
      />
      </div>

      <div>
      <Option5 
        head="Musc. & Nerve Unit "
        one="1 "
        two="2"
        three="3"
        four="4"
        five="5"
      />
      </div>

      <div>
      <Option5 
        head="Skeletal Structure "
        one="1 "
        two="2"
        three="3"
        four="4"
        five="5"
      />
      </div>

       <div>
        <Option 
        head="Co-Morbidity Score  "
        one="0 "
        two="2-4"
        three="4-8"
        four="8-14"
      />
      </div>


      <div>
        <Option3 
          head="Skeletal Trauma"
          one="Ipsilateral Same Limb"
          two="Ipsilateral Other Limb"
          three="Other"
        /></div>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>
       
       <br></br>
       <br></br>


       <div>
      <Option5 
        head="Associated Injury "
        one="Head Injury "
        two=" Chest Injury"
        three="Abd Injury"
        four="Hypo Tension"
        five="Other"
      />
      </div>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>
        <br></br>
       <br></br>
      


       <div>
      <Option6 
        head="Associated Medical"
        one="DM "
        two="HTN"
        three="Cardiac Illness"
        four="Respiratory Illness"
        five="Epilesy"
        six="Other"
      />
      </div>

        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",top:0,left:100, backgroundColor:"transparent",color:"white"}}></textarea>
 
        <br></br>
       <br></br>

      <h1 style={{marginLeft:100, color:'#cd104'}}>Managment Profile</h1>

      <div>
        <Option2
        head="Pre Hospitalm Care"
        one="Given"
        two=" Not Given"
        />
        </div>

        <div>
        
        <Option 
          head="Initial Managment"
          one="Fluid Wash"
          two="POP"
          three=" External Fixator"
          four="Primary Sx"
        /></div>


<div>
        <Option3 
          head="Total Blood Transfusion "
          one="Nil"
          two="1-2 packs"
          three="Greater than 2 packs"
        /></div>


       <div>
        
        <Option 
          head="Antibiotics"
          one="None"
          two=" Single Antibiotic"
          three=" Double Antibiotic "
          four="Triple Antibiotic"
        /></div>

        
<div>
        
        <Option 
          head="Surgical  Debridement"
          one="Conservative"
          two=" Wash"
          three=" Radical "
          four="Other"
        /></div>

        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",top:0,left:530, backgroundColor:"transparent",color:"white"}}></textarea>


        <div>
        <Option3 
          head="Duration Of Surgery  "
          one="Less Than 1 hour"
          two="1-2 hrs"
          three="Greater than 2 hours"
        /></div>

<div>
        <Option3 
          head="Blood Loss  "
          one=" Less Than 100 ml "
          two="100-200 ml"
          three="Greater Than 200 ml"
        /></div>


<div>
      <Option5 
        head="Implant Used"
        one="None "
        two="EX. Fix"
        three="Plating"
        four="Nailing"
        five="Other"
      />
      </div>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>

      
        <div>
        <Option2
        head="Soft Tissue Procedure "
        one="Yes"
        two=" No"
        />
        </div>

        <div>
      <Option5 
        head="Intra-Op Complication"
        one="Vascular Injury "
        two="Nerve Injury"
        three="Tendon"
        four="Bone Loss"
        five="Other"
      />
      </div>

        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>
 

        <div>
        <Option3 
          head="Local Post-Op Complication  "
          one=" None"
          two="Mild Infection"
          three="Severe Infection"
        /></div>


<div>
      <Option6 
        head="Post-Op Complication"
        one="None "
        two="ARDS"
        three="Pul. Embolism"
        four="ARF"
        five=" Vascular Injury"
        six="Other"
      />
      </div>






        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>

      </div>
      
        </div>
 
        
        </div>     
 
  

  }

</div>);
}


export default App;

 