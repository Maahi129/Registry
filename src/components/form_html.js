import React from 'react'
import { useSelector } from 'react-redux';
import { selectAction } from '../features/userSlice';
import './form_html.css'


const Formhtml = () => {

  //  const check = true;
   const login = useSelector(selectAction)

  return (
    <div id='form-t2'>
      <table class="form-t2">
    {/* <thead></thead> */}
    <tbody>
        <tr>
        <th id="form-th" ><p>Time Of Injury</p> </th>

<td style={{marginLeft:25}}><label id="form-label" class="container"name=""><input id="form-check" type="checkbox" value="Morning" checked={login.first}/><span class="mark"></span>Morning</label></td>
<td colspan="2" style={{marginLeft:9}}><label id="form-label" name=""><input id="form-check" type="checkbox" value="Afternoon" checked={login.second}/>Afternoon</label></td>
<td><label id="form-label" name=""><input id="form-check" type="checkbox" value="Evening" checked={login.third} />Evening</label></td>
<td><label id="form-label" name=""><input id="form-check" type="checkbox" value="Night-Time" checked={login.four}/>Night-Time</label></td>
</tr>
<tr>
    <th id="form-th"><p>Time Of Arrival To Hospital</p> </th>
    <td><label id="form-label" name=""><input id="form-check" type="checkbox" value="Morning" checked={login.five} />Less than 2 hours</label></td>
        <td><label id="form-label" name=""><input  id="form-check" type="checkbox" value="Afternoon" checked={login.six}/>2-6 Hours</label></td>
        <td><label id="form-label" name=""><input id="form-check" type="checkbox" value="Evening" checked={login.seven}/>6-24 Hours</label></td>
        <td><label id="form-label" name=""><input id="form-check" type="checkbox" value="Night-Time" checked={login.eight}/>Greaterthan 24 Hours</label></td>
    </tr>
       
    <tr>
        <th id="form-th" ><p>Gap Till Primary Debridement</p> </th>
        
        <td colspan="1"><label id="form-label" name="" class="wide"><input  id="form-check" type="checkbox" checked={login.nine} value="Morning" />Less than 6 hours</label> </td>
            <td colspan="1"><label id="form-label" name="" class="wide"><input id="form-check" type="checkbox" checked={login.ten} value="Afternoon" />6-12 Hours</label></td>
            <td colspan="2"><label id="form-label" name="" class="wide"><input id="form-check" type="checkbox" checked={login.eleven} value="Evening" />Greaterthan 24 Hours</label>
            </td> 
       
        </tr>
        <tr>
            <th id="form-th" ><p>Mode Of Injury</p> </th>
                <td style={{marginLeft:25}}><label id="form-label" name=""><input id="form-check" type="checkbox" checked={login.twelve} value="Morning" />High Energy</label></td>
                <td><label id="form-label" name=""><input id="form-check" type="checkbox" checked={login.thirteen} value="Afternoon" />Low Energy</label></td>
                <td><label id="form-label" name=""><input id="form-check" type="checkbox" checked={login.fourteen} value="Evening" />Crush Injury</label></td>
                <td><label id="form-label" name=""><input id="form-check" type="checkbox" checked={login.fifteen} value="Night-Time" />Farmyard Injury</label></td>
    </tr>
        <br />
        </tbody>
</table>

<table class="size-table" id="form-t3" >
      
<tbody>
   
    <caption>
        Type Of Injury
      </caption>
    
    <tr>
        <th id="form-th"><p>Wound Size</p> </th>
            <td style={{marginLeft:25}}><label id="form-label"  name=""><input id="form-check1" type="checkbox" checked={login.sixteen} value="Morning" />Less than 1cm</label></td>
            <td><label id="form-label"  name=""><input id="form-check1" type="checkbox" checked={login.seventeen} value="Afternoon" />1-10cm</label></td>
            <td><label id="form-label"  name=""><input id="form-check1" type="checkbox" checked={login.eighteen} value="Evening" />Greater than 10cm</label></td>
        </tr>
        

        <tr>
            <th id="form-th"><p>Crushing</p> </th>
                <td style={{marginLeft:31}}><label id="form-label"  name=""><input id="form-check1" type="checkbox" checked={login.nineteen} value="Morning" />Simple</label></td>
                <td><label id="form-label"  name=""><input id="form-check1" type="checkbox" checked={login.twenty} value="Afternoon" />Segmental</label></td>
                <td><label id="form-label"  name=""><input id="form-check1" type="checkbox" checked={login.twentyone} value="Evening" />Crush Injury</label></td>
            </tr>
          

            <tr>
                <th id="form-th"><p>Contamination</p> </th>
                    <td style={{marginLeft:17}}><label class="form-label1" id="form-label"  name=""><input  id="form-check1" type="checkbox" checked={login.twentytwo} value="Morning" />No</label></td>
                    <td><label class="form-label1" id="form-label"  name=""><input id="form-check1" type="checkbox" checked={login.twentythree} value="Afternoon" />Mild</label></td>
                    <td><label id="form-label"  name=""><input id="form-check1" type="checkbox" checked={login.twentyfour} value="Evening" />Significant</label></td>
                </tr>
              
            
                <tr>
                    <th id="form-th"><p>Nerve Injury</p> </th>
                        <td colspan="1" style={{marginLeft:20}}><label class="form-label1" id="form-label"  name=""><input id="form-check1" checked={login.twentyfive} type="checkbox" value="" />No</label></td>
                        <td colspan="2"><label class="form-label1" id="form-label"  name=""><input  id="form-check1" type="checkbox" checked={login.twentysix} value="" />Yes</label></td>
                    </tr>
                   

                    <tr>
                        <th id="form-th"><p>Vascular Injury</p> </th>
                            <td style={{marginLeft:16}}><label class="form-label1" id="form-label"  name=""><input id="form-check1" checked={login.twentyseven} type="checkbox" value="" />No</label></td>
                            <td  colspan="2"><label class="form-label1" id="form-label"   name=""><input id="form-check1" checked={login.twentyeight} type="checkbox" value="" />Yes</label></td>
                        </tr>
                     
    </tbody>
    </table>


    <table id="t4">
      
        <tbody>
           
            <caption>
                Fracture Classification
              </caption>
            
            <tr>
                <th id="form-th"><p>Upper Limb</p> </th>
                    <td><label id="form-label" name=""><input checked={login.twentynine} id="form-check1" type="checkbox" value="Morning" />Shoulder</label></td>
                    <td><label id="form-label" name=""><input checked={login.thirty} id="form-check1" type="checkbox" value="Afternoon"/>Arm</label></td>
                    <td><label id="form-label" name=""><input checked={login.thirtyone} id="form-check1" type="checkbox" value="Evening" />Elbow</label></td>
                    <td><label id="form-label" name=""><input checked={login.thirtytwo} id="form-check1" type="checkbox" value="Afternoon" />Forearm</label></td>
                    <td><label id="form-label" name=""><input checked={login.thirtythree} id="form-check1" type="checkbox" value="Evening" />Wrist</label></td>
                    <td><label id="form-label" name=""><input checked={login.thirtyfour} id="form-check1" type="checkbox" value="Evening" />Hand </label></td>
                </tr>
                
                <tr>
                    <th id="form-th"><p>Lower Limb</p> </th>
                        <td><label id="form-label" name=""><input checked={login.thirtyfive} id="form-check1" type="checkbox" value="Morning" />Pelvis</label></td>
                        <td><label id="form-label" name=""><input checked={login.thirtysix} id="form-check1" type="checkbox" value="Afternoon" />Hip</label></td>
                        <td><label id="form-label" name=""><input checked={login.thirtyseven} id="form-check1" type="checkbox" value="Evening" />Thigh</label></td>
                        <td><label id="form-label" name=""><input checked={login.thirtyeight} id="form-check1" type="checkbox" value="Afternoon" />Knee</label></td>
                        <td><label id="form-label" name=""><input checked={login.thirtynine} id="form-check1" type="checkbox" value="Evening" />Leg</label></td>
                        <td><label id="form-label" name=""><input checked={login.fourty} id="form-check1" type="checkbox" value="Evening" />Foot </label></td>
                    </tr>
                    

                    <tr>
                        <th  id="form-th"><p>Gustilo Anderson Classification</p> </th>
                            <td style={{marginRight:20}}><label style={{textAlign:"center"}} id="form-label" name=""><input checked={login.fourtyone} id="form-check1" type="checkbox" value="Morning" />I</label></td>
                            <td ><label class="form-label2" id="form-label" name=""><input checked={login.fourtytwo} class="form-pos" id="form-check1" type="checkbox" value="Afternoon" />II</label></td>
                            <td ><label class="form-label2" id="form-label" name=""><input checked={login.fourtythree} class="form-pos" id="form-check1" type="checkbox" value="Evening" />IIIA</label></td>
                            <td ><label class="form-label2" id="form-label" name=""><input checked={login.fourtyfour} class="form-pos" id="form-check1" type="checkbox" value="Afternoon" />IIIB</label></td>
                            <td colspan="2"><label class="form-label2" id="form-label" name=""><input checked={login.fourtyfive} class="form-pos" id="form-check1" type="checkbox" value="Evening" />IIIC</label></td>
                        </tr>
                        
            </tbody>
        </table>



        <table class="size-table" id="t5">
      
            <tbody>
               
                <caption>
                    Ganga Score
                  </caption>
                
                <tr>
                    <th id="form-th"><p>Skin & Fascia</p> </th>
                        <td style={{marginLeft: 40}}><label id="form-label" class="form-label2" name=""><input checked={login.fourtysix} id="form-check1" type="checkbox" value="Morning" />1</label></td>
                        <td><label id="form-label" class="form-label2" name=""><input checked={login.fourtyseven} id="form-check1" type="checkbox" value="Afternoon" />2</label></td>
                        <td><label id="form-label" class="form-label2" name=""><input checked={login.fourtyeight} id="form-check1" type="checkbox" value="Evening" />3</label></td>
                        <td><label id="form-label" class="form-label2" name=""><input checked={login.fourtynine} id="form-check1" type="checkbox" value="Afternoon" />4</label></td>
                        <td><label id="form-label" class="form-label2" name=""><input checked={login.fifty}  id="form-check1" type="checkbox" value="Evening" />5</label></td>
                    </tr>
                   
                    <tr>
                        <th id="form-th"><p>Muscle & Nerve Unit</p> </th>
                            <td style={{marginLeft: 20}}><label id="form-label" class="form-label2" name=""><input checked={login.fiftyone} id="form-check1" type="checkbox" value="Morning" /> 1</label></td>
                            <td><label id="form-label" class="form-label2" name=""><input checked={login.fiftytwo}  id="form-check1" type="checkbox" value="Afternoon" />2</label></td>
                            <td><label id="form-label" class="form-label2" name=""><input checked={login.fiftythree} id="form-check1" type="checkbox" value="Evening" />3</label></td>
                            <td><label id="form-label" class="form-label2"  name=""><input checked={login.fiftyfour} id="form-check1" type="checkbox" value="Afternoon" />4</label></td>
                            <td><label id="form-label" class="form-label2" name=""><input checked={login.fiftyfive} id="form-check1" type="checkbox" value="Evening" />5</label></td>
                        </tr>
                        
    
                       
                         <tr>
                            <th id="form-th"><p>Skeletal Structure</p> </th>
                                <td style={{marginLeft: 25}}><label id="form-label" class="form-label2" name=""><input checked={login.fiftysix} id="form-check1" type="checkbox" value="Morning" />1</label></td>
                                <td><label id="form-label" class="form-label2" name=""><input checked={login.fiftyseven} id="form-check1" type="checkbox" value="Afternoon" />2</label></td>
                                <td><label id="form-label" class="form-label2" name=""><input checked={login.fiftyeight} id="form-check1" type="checkbox" value="Evening" />3</label></td>
                                <td><label id="form-label" class="form-label2" name=""><input checked={login.fiftynine} id="form-check1" type="checkbox" value="Afternoon" />4</label></td>
                                <td colspan="2"><label class="form-label2" id="form-label" name=""><input checked={login.sixty} id="form-check1" type="checkbox" value="Evening" />5</label></td>
                            </tr>
                          
                            <tr>
                                <th id="form-th"><p>Co-Morbidity Score</p> </th>
                                    <td style={{marginLeft: 20}}><label id="form-label" class="form-label2" name=""><input checked={login.sixtyone} id="form-check1" type="checkbox" value="Morning" />0</label></td>
                                    <td><label id="form-label" class="form-label2" name=""><input checked={login.sixtytwo} id="form-check1" type="checkbox" value="Afternoon" />2-4</label></td>
                                    <td><label id="form-label" class="form-label2" name=""><input checked={login.sixtythree} id="form-check1" type="checkbox" value="Evening" />4-8</label></td>
                                    <td colspan="2"><label id="form-label" class="form-label2" name=""><input checked={login.sixtyfour} id="form-check1" type="checkbox" value="Afternoon" />8-14</label></td>
                                </tr>
                                
                </tbody>
            </table>


            <table class="size-table" id="t6">
                <tbody>
                    <tr>
                    <th id="form-th"> <p>Skeletal Trauma</p> </th>
            
            <td><label id="form-label" name=""><input checked={login.sixtyfive} id="form-check1" type="checkbox" value="Morning" />Ipsilateral Same Limb</label></td>
            <td ><label id="form-label" name=""><input checked={login.sixtysix} id="form-check1" type="checkbox" value="Afternoon" />Ipsilateral Other Limb</label></td>
            <td ><label id="form-label" class="form-label3" name=""><input checked={login.sixtyseven} id="form-check1" type="checkbox" value="Evening"  />Other </label></td>
            </tr>
            {/* <tr><td id="other">Other : Heyyyyy</td></tr> */}
            <tr>
                <th id="form-th"><p>Associated Injury</p> </th>
                <td><label id="form-label" name=""><input checked={login.sixtyeight} id="form-check1" type="checkbox" value="Morning" />Head Injury</label></td>
                    <td><label id="form-label" name=""><input checked={login.sixtynine} id="form-check1" type="checkbox" value="Afternoon" />Chest Injury</label></td>
                    <td><label id="form-label" name=""><input checked={login.seventy} id="form-check1" type="checkbox" value="Evening" />Abd Injury</label></td>
                    <td><label id="form-label" name=""><input checked={login.seventyone} id="form-check1" type="checkbox" value="Night-Time" />Hypotension</label></td>
                    <td colspan="2"><label class="form-label3" id="form-label" name=""><input checked={login.seventytwo} id="form-check1" type="checkbox" value="Evening" />Other </label></td>
              
                </tr>
                {/* <tr><td  id="other">Other : Heyyyyy</td></tr> */}
                    
                <tr>
                    <th id="form-th"><p>Associated Medical Injury</p> </th>

                    <td ><label  id="form-label" name="" class="wide form-label3"><input checked={login.seventythree}  id="form-check1" type="checkbox" value="Morning" />DM</label></td>
                        <td><label id="form-label" name="" class="wide form-label3"><input checked={login.seventyfour} id="form-check1" type="checkbox" value="Afternoon" />HTN</label></td>
                        <td ><label id="form-label" name="" class="wide"><input checked={login.seventyfive} id="form-check1" type="checkbox" value="Evening" />Cardiac Illness</label>
                        </td> 
                        <td><label id="form-label" name="" class="wide"><input checked={login.seventysix} id="form-check1" type="checkbox" value="Morning" />Respiratory Illness</label></td>
                            <td><label id="form-label" name="" class="wide"><input checked={login.seventyseven} id="form-check1" type="checkbox" value="Afternoon" />Epilepsy</label></td>
                        <td><label class="form-label3" id="form-label" name=""><input checked={login.seventyeight} id="form-check1" type="checkbox" value="Evening" />Other </label></td>  
                        
                    </tr>
                    {/* <tr><td  id="other">Other : Heyyyyy</td></tr> */}
                    </tbody>
            </table>
            <table class="size-table" id="t7">
      
                <tbody>
                   
                    <caption>
                        Management Profile
                      </caption>
                    
                    <tr>
                        <th  id="form-th"><p>Pre-Hospital Care</p> </th>
                            <td style={{marginLeft:12}} colspan="3"><label id="form-label" name=""><input checked={login.seventynine} id="form-check1" type="checkbox" value="Morning" />Given</label></td>
                            <td colspan="3"><label id="form-label" name=""><input checked={login.eighty} id="form-check1" type="checkbox" value="Afternoon" />Not Given</label></td>
                        </tr>
                        
                        <tr>
                            <th id="form-th"><p>Initial Management</p> </th>
                                <td style={{marginLeft:10}}><label id="form-label" name=""><input checked={login.eightyone} id="form-check1" type="checkbox" value="Morning" />Fluid Wash</label></td>
                                <td><label id="form-label" name=""><input checked={login.eightytwo} id="form-check1" type="checkbox" value="Afternoon" />POP</label></td>
                                <td colspan="2"><label id="form-label" name=""><input checked={login.eightythree} id="form-check1" type="checkbox" value="Evening" />External Fixator</label></td>
                                <td colspan="2"><label id="form-label" name=""><input checked={login.eightyfour} id="form-check1" type="checkbox" value="Afternoon" />Primary Sx</label></td>
                            </tr>
                            
        
                           
                             <tr>
                                <th id="form-th"><p>Total Blood Transfusion</p> </th>
                                    <td colspan="2"><label id="form-label" name=""><input checked={login.eightyfive} id="form-check1" type="checkbox" value="Morning" />Nil</label></td>
                                    <td colspan="2"><label id="form-label" name=""><input checked={login.eightysix} id="form-check1" type="checkbox" value="Afternoon" />1-2 Packs</label></td>
                                    <td colspan="2"><label id="form-label" name=""><input checked={login.eightyseven} id="form-check1" type="checkbox" value="Evening" /> &gt; 2 Packs</label></td>
                                </tr>
                               
                                <tr>
                                    <th id="form-th"><p>Antibiotics</p> </th>
                                        <td style={{marginLeft:27}}><label id="form-label" name=""><input checked={login.eightyeight} id="form-check1" type="checkbox" value="Morning" />None</label></td>
                                        <td><label id="form-label"  name=""><input checked={login.eightynine} id="form-check1" type="checkbox" value="Afternoon" />Single Antibiotic </label></td>
                                        <td colspan="2"><label id="form-label" name=""><input checked={login.ninety} id="form-check1" type="checkbox" value="Evening" />Double Antibiotic</label></td>
                                        <td colspan="2"><label id="form-label" name=""><input checked={login.ninetyone} id="form-check1" type="checkbox" value="Afternoon" />Triple Antibiotic </label></td>
                                    </tr>
                                   

                                    <tr>
                                        <th id="form-th"><p>Surgical Debridement</p> </th>
                                            <td style={{marginLeft:7}}><label id="form-label" name=""><input  checked={login.ninetytwo} id="form-check1" type="checkbox" value="Morning" />Conservative</label></td>
                                            <td><label id="form-label" name=""><input  checked={login.ninetythree} id="form-check1"type="checkbox" value="Afternoon" />Wash </label></td>
                                            <td colspan="2"><label id="form-label" name=""><input  checked={login.ninetyfour} id="form-check1" type="checkbox" value="Evening" />Radical</label></td>
                                            <td colspan="2"><label id="form-label" name=""><input  checked={login.ninetyfive} id="form-check1" type="checkbox" value="Evening" />Other </label></td>  
                                        </tr>
                                        
                                        <tr>
                                            <th id="form-th"><p>Duration of Surgery</p> </th>
                                                <td style={{marginLeft:10}} colspan="2"><label id="form-label" name=""><input  checked={login.ninetysix} id="form-check1" type="checkbox" value="Morning" /> &lt; 1hr</label></td>
                                                <td colspan="2"><label id="form-label" name=""><input  checked={login.ninetyseven} id="form-check1" type="checkbox" value="Afternoon" />1-2hrs </label></td>
                                                <td colspan="2"><label id="form-label" name=""><input  checked={login.ninetyeight} id="form-check1" type="checkbox" value="Evening" /> &gt; 2hrs</label></td>
                                            </tr>
                                            
                                            <tr>
                                                <th id="form-th"><p>Blood Loss</p> </th>
                                                    <td style={{marginLeft:24}} colspan="2"><label id="form-label" name=""><input  checked={login.ninetynine} id="form-check1" type="checkbox" value="Morning" /> &lt; 100ml</label></td>
                                                    <td colspan="2"><label id="form-label" name=""><input  checked={login.hundred} id="form-check1" type="checkbox" value="Afternoon"/>100-200ml </label></td>
                                                    <td colspan="2"><label id="form-label" name=""><input  checked={login.hundredone} id="form-check1" type="checkbox" value="Evening"/> &gt; 200ml</label></td>
                                                </tr>
                                                
                                                <tr>
                                         <th id="form-th"><p>Implant Used</p> </th>
                                            <td style={{marginLeft:18}}><label id="form-label" name=""><input  checked={login.hundredtwo} id="form-check1" type="checkbox" value="Morning" />None</label></td>
                                          <td><label id="form-label" name=""><input  checked={login.hundredthree}  id="form-check1" type="checkbox" value="Afternoon" />Ex.Fix </label></td>
                                              <td><label id="form-label" name=""><input  checked={login.hundredfour} id="form-check1" type="checkbox" value="Evening" />Plating</label></td>
                                              <td><label id="form-label" name=""><input  checked={login.hundredfive} id="form-check1" type="checkbox" value="Evening" />Nailing</label></td>
                                             <td colspan="2"><label id="form-label" name=""><input  checked={login.hundredsix}  id="form-check1" type="checkbox" value="Evening" />Other</label></td>  
                                                    </tr>
                                                    
                                                    <tr>
                                                        <th id="form-th"><p>Soft Tissue Procedure</p> </th>
                                                            <td style={{marginLeft:5}} colspan="3"><label id="form-label" name=""><input  checked={login.hundredseven} id="form-check1" type="checkbox" value="Morning" />Yes</label></td>
                                                            <td colspan="3"><label id="form-label" name=""><input  checked={login.hundredeight} id="form-check1" type="checkbox" value="Afternoon" />No</label></td>
                                                        </tr>
                                                        <br />
                                                        <br />
                                                       
                                                        
                                                        <tr style={{marginTop:10}}>
                                                            <th  id="form-th"><p>Intra-Op Complication</p> </th>
                                                            <td><label id="form-label" name=""><input  checked={login.hundrednine} id="form-check1" type="checkbox" value="Morning" />Vascular Injury</label></td>
                                                                <td><label id="form-label" name=""><input  checked={login.hundredten} id="form-check1" type="checkbox" value="Afternoon" />Nerve Injury</label></td>
                                                                <td><label id="form-label" name=""><input  checked={login.hundredeleven} id="form-check1" type="checkbox" value="Evening" />Tendon</label></td>
                                                                <td><label id="form-label" name=""><input  checked={login.hundredtwelve} id="form-check1" type="checkbox" value="Night-Time" />Bone Loss</label></td>
                                                                <td colspan="2"><label id="form-label" name=""><input  checked={login.hundredthirteen} id="form-check1" type="checkbox" value="Evening" />Other </label></td>
                                                            </tr>
                                                              
                                                                <tr>
                                                                    <th id="form-th"><p>Local Post-op Compilation</p> </th>
                                                                        <td colspan="2"><label id="form-label" name=""><input  checked={login.hundredfourteen} id="form-check1" type="checkbox" value="Morning" />None</label></td>
                                                                        <td colspan="2"><label id="form-label" name=""><input  checked={login.hundredfifteen} id="form-check1" type="checkbox" value="Afternoon" />Mild Infection</label></td>
                                                                        <td colspan="2"><label id="form-label" name=""><input  checked={login.hundredsixteen} id="form-check1" type="checkbox" value="Afternoon" />Severe Infection</label></td>
                                                                    </tr>
                                                                    

                                                                    <tr>
                                                                        <th id="form-th"><p>Post-Op Complication</p> </th>
                                                                        <td><label id="form-label" name=""><input  checked={login.hundredseventeen} id="form-check1" type="checkbox" value="Morning" />None</label></td>
                                                                            <td><label id="form-label" name=""><input  checked={login.hundredeighteen} id="form-check1" type="checkbox" value="Afternoon" />ARDS</label></td>
                                                                            <td><label id="form-label" name=""><input  checked={login.hundrednineteen} id="form-check1" type="checkbox" value="Evening" />Pul.Embolism</label></td>
                                                                            <td><label id="form-label" name=""><input checked={login.hundredtwenty} id="form-check1" type="checkbox" value="Night-Time" />ARF</label></td>
                                                                            <td><label id="form-label" name=""><input checked={login.hundredtwentyone} id="form-check1" type="checkbox" value="Night-Time" />Vascular Injury</label></td>
                                                                            <td colspan><label id="form-label" name=""><input checked={login.hundredtwentytwo} id="form-check1" type="checkbox" value="Evening" />Other </label></td>
                                                                        </tr>
                                                                           
                    </tbody>
                </table>

    </div>
  )
}

export default Formhtml;

