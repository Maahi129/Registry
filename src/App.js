import React from 'react';
import './css/styles.css';
// import Option from './option';
import Patient from './patient';
import {  selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Nwin from './components/nwin';
// import Option3 from './option3';
// import Option5 from './option5';
// import Option2 from './option2';
// import Option6 from './option6';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import s1 from './static/popin.mp3';
// import s2 from './static/popout.mp3';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";









const App = () => {

 

  const user = useSelector(selectUser);


  
  

  var handleAudio = () => {
    var audio = new Audio(s1);
    var check = document.getElementById("cell")
      check.addEventListener('change', audio.play());
  }

   
   

  const dispatch = useDispatch();
  
  const [first,setFirst] = useState(false);
  const [second,setSecond] = useState(false);
  const [third,setThird] = useState(false);
  const [four,setFour] = useState(false);
  const [five,setFive] = useState(false);
  const [six,setSix] = useState(false);
  const [seven,setSeven] = useState(false);
  const [eight,setEight] = useState(false);
  const [nine,setNine] = useState(false);
  const [ten,setTen] = useState(false);
  const [eleven,setEleven] = useState(false);
  const [twelve,setTwelve] = useState(false);
  const [thirteen,setThirteen] = useState(false);
  const [fourteen,setFourteen] = useState(false);
  const [fifteen,setFifteen] = useState(false);
  const [sixteen,setSixteen] = useState(false);
  const [seventeen,setSeventeen] = useState(false);
  const [eighteen,setEighteen] = useState(false);
  const [nineteen,setNineteen] = useState(false);
  const [twenty,setTwenty] = useState(false);
  const [twentyone,setTwentyOne] = useState(false);
  const [twentytwo,setTwentyTwo] = useState(false);
  const [twentythree,setTwentyThree] = useState(false);
  const [twentyfour,setTwentyFour] = useState(false);
  const [twentyfive,setTwentyFive] = useState(false);
  const [twentysix,setTwentySix] = useState(false);
  const [twentyseven,setTwentySeven] = useState(false);
  const [twentyeight,setTwentyEight] = useState(false);
  const [twentynine,setTwentyNine] = useState(false);
  const [thirty,setThirty] = useState(false);
  const [thirtyone,setThirtyOne] = useState(false);
  const [thirtytwo,setThirtyTwo] = useState(false);
  const [thirtythree,setThirtyThree] = useState(false);
  const [thirtyfour,setThirtyFour] = useState(false);
  const [thirtyfive,setThirtyFive] = useState(false);
  const [thirtysix,setThirtySix] = useState(false);
  const [thirtyseven,setThirtySeven] = useState(false);
  const [thirtyeight,setThirtyEight] = useState(false);
  const [thirtynine,setThirtyNine] = useState(false);
  const [fourty,setFourty] = useState(false);
  const [fourtyone,setFourtyOne] = useState(false);
  const [fourtytwo,setFourtyTwo] = useState(false);
  const [fourtythree,setFourtyThree] = useState(false);
  const [fourtyfour,setFourtyFour] = useState(false);
  const [fourtyfive,setFourtyFive] = useState(false);
  const [fourtysix,setFourtySix] = useState(false);
  const [fourtyseven,setFourtySeven] = useState(false);
  const [fourtyeight,setFourtyEight] = useState(false);
  const [fourtynine,setFourtyNine] = useState(false);
  const [fifty,setFifty] = useState(false);
  const [fiftyone,setFiftyOne] = useState(false);
  const [fiftytwo,setFiftyTwo] = useState(false);
  const [fiftythree,setFiftyThree] = useState(false);
  const [fiftyfour,setFiftyFour] = useState(false);
  const [fiftyfive,setFiftyFive] = useState(false);
  const [fiftysix,setFiftySix] = useState(false);
  const [fiftyseven,setFiftySeven] = useState(false);
  const [fiftyeight,setFiftyEight] = useState(false);
  const [fiftynine,setFiftyNine] = useState(false);
  const [sixty,setSixty] = useState(false);
  const [sixtyone,setSixtyOne] = useState(false);
  const [sixtytwo,setSixtyTwo] = useState(false);
  const [sixtythree,setSixtyThree] = useState(false);
  const [sixtyfour,setSixtyFour] = useState(false);
  const [sixtyfive,setSixtyFive] = useState(false);
  const [sixtysix,setSixtySix] = useState(false);
  const [sixtyseven,setSixtySeven] = useState(false);
  const [sixtyeight,setSixtyEight] = useState(false);
  const [sixtynine,setSixtyNine] = useState(false);
  const [seventy,setSeventy] = useState(false);
  const [seventyone,setSeventyOne] = useState(false);
  const [seventytwo,setSeventyTwo] = useState(false);
  const [seventythree,setSeventyThree] = useState(false);
  const [seventyfour,setSeventyFour] = useState(false);
  const [seventyfive,setSeventyFive] = useState(false);
  const [seventysix,setSeventySix] = useState(false);
  const [seventyseven,setSeventySeven] = useState(false);
  const [seventyeight,setSeventyEight] = useState(false);
  const [seventynine,setSeventyNine] = useState(false);
  const [eighty,setEighty] = useState(false);
  const [eightyone,setEightyOne] = useState(false);
  const [eightytwo,setEightyTwo] = useState(false);
  const [eightythree,setEightyThree] = useState(false);
  const [eightyfour,setEightyFour] = useState(false);
  const [eightyfive,setEightyFive] = useState(false);
  const [eightysix,setEightySix] = useState(false);
  const [eightyseven,setEightySeven] = useState(false);
  const [eightyeight,setEightyEight] = useState(false);
  const [eightynine,setEightyNine] = useState(false);
  const [ninety,setNinety] = useState(false);
  const [ninetyone,setNinetyOne] = useState(false);
  const [ninetytwo,setNinetyTwo] = useState(false);
  const [ninetythree,setNinetyThree] = useState(false);
  const [ninetyfour,setNinetyFour] = useState(false);
  const [ninetyfive,setNinetyFive] = useState(false);
  const [ninetysix,setNinetySix] = useState(false);
  const [ninetyseven,setNinetySeven] = useState(false);
  const [ninetyeight,setNinetyEight] = useState(false);
  const [ninetynine,setNinetyNine] = useState(false);
  const [hundred,setHundred] = useState(false);
  const [hundredone,setHundredOne] = useState(false);
  const [hundredtwo,setHundredTwo] = useState(false);
  const [hundredthree,setHundredThree] = useState(false);
  const [hundredfour,setHundredFour] = useState(false);
  const [hundredfive,setHundredFive] = useState(false);
  const [hundredsix,setHundredSix] = useState(false);
  const [hundredseven,setHundredSeven] = useState(false);
  const [hundredeight,setHundredEight] = useState(false);
  const [hundrednine,setHundredNine] = useState(false);
  const [hundredten,setHundredTen] = useState(false);
  const [hundredeleven,setHundredEleven] = useState(false);
  const [hundredtwelve,setHundredTwelve] = useState(false);
  const [hundredthirteen,setHundredThirteen] = useState(false);
  const [hundredfourteen,setHundredFourteen] = useState(false);
  const [hundredfifteen,setHundredFifteen] = useState(false);
  const [hundredsixteen,setHundredSixteen] = useState(false);
  const [hundredseventeen,setHundredSeventeen] = useState(false);
  const [hundredeighteen,setHundredEighteen] = useState(false);
  const [hundrednineteen,setHundredNineteen] = useState(false);
  const [hundredtwenty,setHundredTwenty] = useState(false);
  const [hundredtwentyone,setHundredTwentyOne] = useState(false);
  const [hundredtwentytwo,setHundredTwentyTwo] = useState(false);




   dispatch(login({
    first:first,
    second:second,
    third:third,
    four:four,
    five:five,
    six:six,
    seven:seven,
    eight:eight,
    nine:nine,
    ten:ten,
    eleven:eleven,
    twelve:twelve,
    thirteen:thirteen,
    fourteen:fourteen,
    fifteen:fifteen,
    sixteen:sixteen,
    seventeen:seventeen,
    eighteen:eighteen,
    nineteen:nineteen,
    twenty:twenty,
    twentyone:twentyone,
    twentytwo:twentytwo,
    twentythree:twentythree,
    twentyfour:twentyfour,
    twentyfive:twentyfive,
    twentysix:twentysix,
    twentyseven:twentyseven,
    twentyeight:twentyeight,
    twentynine:twentynine,
    thirty:thirty,
    thirtyone:thirtyone,
    thirtytwo:thirtytwo,
    thirtythree:thirtythree,
    thirtyfour:thirtyfour,
    thirtyfive:thirtyfive,
    thirtysix:thirtysix,
    thirtyseven:thirtyseven,
    thirtyeight:thirtyeight,
    thirtynine:thirtynine,
    fourty:fourty,
    fourtyone:fourtyone,
    fourtytwo:fourtytwo,
    fourtythree:fourtythree,
    fourtyfour:fourtyfour,
    fourtyfive:fourtyfive,
    fourtysix:fourtysix,
    fourtyseven:fourtyseven,
    fourtyeight:fourtyeight,
    fourtynine:fourtynine,
    fifty:fifty,
    fiftyone:fiftyone,
    fiftytwo:fiftytwo,
    fiftythree:fiftythree,
    fiftyfour:fiftyfour,
    fiftyfive:fiftyfive,
    fiftysix:fiftysix,
    fiftyseven:fiftyseven,
    fiftyeight:fiftyeight,
    fiftynine:fiftynine,
    sixty:sixty,
    sixtyone:sixtyone,
    sixtytwo:sixtytwo,
    sixtythree:sixtythree,
    sixtyfour:sixtyfour,
    sixtyfive:sixtyfive,
    sixtysix:sixtysix,
    sixtyseven:sixtyseven,
    sixtyeight:sixtyeight,
    sixtynine:sixtynine,
    seventy:seventy,
    seventyone:seventyone,
    sventytwo:seventytwo,
    seventythree:seventythree,
    seventyfour:seventyfour,
    seventyfive:seventyfive,
    seventysix:seventysix,
    seventyseven:seventyseven,
    seventyeight:seventyeight,
    seventynine:seventynine,
    eighty:eighty,
    eightyone:eightyone,
    eightytwo:eightytwo,
    eightythree:eightythree,
    eightyfour:eightyfour,
    eightyfive:eightyfive,
    eightysix:eightysix,
    eightyseven:eightyseven,
    eightyeight:eightyeight,
    eightynine:eightynine,
    ninety:ninety,
    ninetyone:ninetyone,
    ninetytwo:ninetytwo,
    ninetythree:ninetythree,
    ninetyfour:ninetyfour,
    ninetyfive:ninetyfive,
    ninetysix:ninetysix,
    ninetyseven:ninetyseven,
    ninetyeight:ninetyeight,
    ninetynine:ninetynine,
    hundred:hundred,
    hundredone:hundredone,
    hundredtwo:hundredtwo,
    hundrdthree:hundredthree,
    hundredfour:hundredfour,
    hundredfive:hundredfive,
    hundredsix:hundredsix,
    hundredseven:hundredseven,
    hundredeight:hundredeight,
    hundrednine:hundrednine,
    hundredten:hundredten,
    hundredeleven:hundredeleven,
    hundredtwelve:hundredtwelve,
    hundredthirteen:hundredthirteen,
    hundredfourteen:hundredfourteen,
    hundredfifteen:hundredfifteen,
    hundredsixteen:hundredsixteen,
    hundredseventeen:hundredseventeen,
    hundredeighteen:hundredeighteen,
    hundrednineteen:hundrednineteen,
    hundredtwenty:hundredtwenty,
    hundredtwentyone:hundredtwentyone,
    hundredtwentytwo:hundredtwentytwo
   })   
   )
 
 

   

 
   var value = 0;
   var percentage = Math.round(value);
 
   if(first||second||third||four){
     value+=3.22;
     percentage=Math.round(value)
   }
  
  
   if(five||six||seven||eight){
    value+=3.22;
    percentage=Math.round(value)
   }

   if(nine||ten||eleven){
    value+=3.22;
    percentage=Math.round(value)
}

if(twelve||thirteen||fourteen||fifteen){
    value+=3.22;
    percentage=Math.round(value)
}
if(sixteen||seventeen||eighteen){
    value+=3.22;
    percentage=Math.round(value)
}
if(nineteen||twenty||twentyone){
    value+=3.22;
    percentage=Math.round(value)
}
if(twentytwo||twentythree||twentyfour){
    value+=3.22;
    percentage=Math.round(value)
}
if(twentyfive||twentysix){
    value+=3.22;
    percentage=Math.round(value)
}
if(twentyseven||twentyeight){
    value+=3.22;
    percentage=Math.round(value)
}
if(twentynine||thirty||thirtyone||thirtytwo||thirtythree||thirtyfour){
    value+=3.22;
    percentage=Math.round(value)
}
if(thirtyfive||thirtyfive||thirtysix||thirtyseven||thirtyeight||thirtynine||fourty){
    value+=3.22;
    percentage=Math.round(value)
}
if(fourtyone||fourtytwo||fourtythree||fourtyfour||fourtyfive){
    value+=3.22;
    percentage=Math.round(value)
}
if(fourtysix||fourtyseven||fourtyeight||fourtynine||fifty){
    value+=3.22;
    percentage=Math.round(value)
}
if(fiftyone||fiftytwo||fiftythree||fiftyfour||fiftyfive){
    value+=3.22;
    percentage=Math.round(value)
}
if(fiftysix||fiftyseven||fiftyeight||fiftynine||sixty){
    value+=3.22;
    percentage=Math.round(value)
}
if(sixtyone||sixtytwo||sixtythree||sixtyfour){
    value+=3.22;
    percentage=Math.round(value)
}
if(sixtyfive||sixtysix||sixtyseven){
    value+=3.22;
    percentage=Math.round(value)
}
if(sixtyeight||sixtynine||seventy||seventyone||seventytwo){
    value+=3.22;
    percentage=Math.round(value)
}
if(seventythree||seventyfour||seventyfive||seventysix||seventyseven||seventyeight){
    value+=3.22;
    percentage=Math.round(value)
}
if(seventynine||eighty){
    value+=3.22;
    percentage=Math.round(value)
}
if(eightyone||eightytwo||eightythree||eightyfour){
    value+=3.22;
    percentage=Math.round(value)
}
if(eightyfive||eightysix||eightyseven){
    value+=3.22;
    percentage=Math.round(value)
}
if(eightyeight||eightynine||ninety||ninetyone){
    value+=3.22;
    percentage=Math.round(value)
}
if(ninetytwo||ninetythree||ninetyfour||ninetyfive){
    value+=3.22;
    percentage=Math.round(value)
}
if(ninetysix||ninetyseven||ninetyeight){
    value+=3.22;
    percentage=Math.round(value)
}
if(ninetynine||hundred||hundredone){
    value+=3.22;
    percentage=Math.round(value)
}
if(hundredtwo||hundredthree||hundredfour||hundredfive||hundredsix){
    value+=3.22;
    percentage=Math.round(value)
}
if(hundredseven||hundredeight){
    value+=3.22;
    percentage=Math.round(value)
}
if(hundrednine||hundredten||hundredeleven||hundredtwelve||hundredthirteen){
    value+=3.22;
    percentage=Math.round(value)
}
if(hundredfourteen||hundredfifteen||hundredsixteen){
    value+=3.22;
    percentage=Math.round(value)
}
if(hundredseventeen||hundredeighteen||hundrednineteen||hundredtwenty||hundredtwentyone||hundredtwentytwo){
    value+=3.22;
    percentage=Math.round(value)
}
   
  








  return(

  <div> {user && user.name && user.age && user.address && user.height && user.weight && user.name_of_hospital && user.state ? <Nwin /> :  
    <div>
   
   <div id="progress" style={{marginLeft:1350}}>
    <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
          textColor: "red",
          pathColor: "turquoise",
          trailColor: "gold",
         
        })}
/>

</div>







    <div>
    <h1 class="header"><span>Questionnarie</span> <span>For</span> <span> Open </span> <span>Fracture</span></h1>
 

</div>



    

    <div  className="full">
       <Patient />
        <div className='col' id='column'>
        <div>

        
       
        
         {/* <Option 
          head="Time of Injury"
          one="Morning"
          two="Afternoon"
          three="Evening"
          four="Night"
        /> */}

        <h2 style={{marginLeft:100}}>Time Of Injury:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="1" id="cell"  data-on="Yes" data-off="No"  value={first}
        onChange={(e) => 
          setFirst(e.target.checked)}
        
        onClick={() => handleAudio()}
        
      
        /> <span id="span">Morning </span>
        </label>
        <label>
        <input type="checkbox" name="2" id="cell"  data-on="Yes" data-off="No"  value={second}
        onChange={(e) => setSecond(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Afternoon </span>
        </label>
        <label>
        <input type="checkbox" name="3" id="cell"  data-on="Yes" data-off="No"  value={third}
       onChange={(e) => setThird(e.target.checked)}
       onClick={() => handleAudio()}
        /> <span id="span">Evening </span>
        </label>
        <label>
        <input type="checkbox" name="4" id="cell"  data-on="Yes" data-off="No"  value={four}
        onChange={(e) => setFour(e.target.checked)}
        onClick={() => handleAudio()}
       /> <span id="span">Night</span>
        </label>
        </div>
        </div>
        
        </div> 

        <div>
        {/* <Option 
          head="Time of Arrival"
          one="Less than 2hours"
          two="2-6 hours"
          three="6-24 hours"
          four="Greater than 24hours"
        /> */}

        <h2 style={{marginLeft:100}}>Time of Arrival:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={five}
       
       onChange={(e) => setFive(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Less than 2hours </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={six}
        onChange={(e) => setSix(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">2-6 hours </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  value={seven}
         onChange={(e) => setSeven(e.target.checked)}
         onClick={() => handleAudio()}
        /> <span id="span">6-24 hours </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  value={eight}
          onChange={(e) => setEight(e.target.checked)}
          onClick={() => handleAudio()}
       /> <span id="span">Greater than 24 hours</span>
        </label>
        </div>
        </div>
        
        </div>



       <div>
        {/* <Option3 
          head="Gap Till Primary Debridement"
          one="Less than 6 hours"
          two="6-12 hours"
          three="Greater than 12hours"
        /> */}

        <h2 style={{marginLeft:100}}>Gap Till Primary Debridement:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={nine}
       
       onChange={(e) => setNine(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Less than 6 hours </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={ten}
        onChange={(e) => setTen(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">6-12 hours </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  value={eleven}
          onChange={(e) => setEleven(e.target.checked)}
          onClick={() => handleAudio()}
       /> <span id="span">Greater than 12 hours</span>
        </label>
        </div>
        </div>
        
        </div>

       
      

        <div>
      {/* <Option 
        head="Mode of Injury "
        one="High Energy "
        two="Low Energy"
        three="Crush Injury"
        four="Farmyard Injury"
      /> */}
      <h2 style={{marginLeft:100}}>Mode of Injury:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={twelve}
       
       onChange={(e) => setTwelve(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">High Energy </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirteen}
        onChange={(e) => setThirteen(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Low Energy </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  value={fourteen}
          onChange={(e) => setFourteen(e.target.checked)}
          onClick={() => handleAudio()}
       /> <span id="span">Crush Injury</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  value={fifteen}
          onChange={(e) => setFifteen(e.target.checked)}
          onClick={() => handleAudio()}
       /> <span id="span">Farmyard Injury</span>
        </label>
        </div>
        </div>
      </div>

        

        <h1  style={{marginLeft:100}}>Type Of Injury</h1>


        <div>
        {/* <Option3 
          head="Wound Size"
          one="Less than 1 cm"
          two="1-10 cm"
          three="Greater Than 10 cm"
        /> */}
        <h2 style={{marginLeft:100}}>Wound Size:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={sixteen}
       
       onChange={(e) => setSixteen(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Less than 1 cm </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={seventeen}
        onChange={(e) => setSeventeen(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">1-10 cm </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  value={eighteen}
          onChange={(e) => setEighteen(e.target.checked)}
          onClick={() => handleAudio()}
       /> <span id="span">Greater Than 10 cm</span>
        </label>
        </div>
        </div>
        </div>


<div>
        {/* <Option3 
          head="Crushing"
          one="Simple"
          two="Segmental"
          three="Crush Injury"
        /> */}
        <h2 style={{marginLeft:100}}>Crushing:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={nineteen}
       
       onChange={(e) => setNineteen(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Simple </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={twenty}
        onChange={(e) => setTwenty(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Segmental </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  value={twentyone}
          onChange={(e) => setTwentyOne(e.target.checked)}
          onClick={() => handleAudio()}
       /> <span id="span">Crush Injury</span>
        </label>
       
        </div>
        </div>
        </div>

<div>
        {/* <Option3 
          head="Contamination"
          one="No"
          two="Mild"
          three="Significant"
        /> */}
        <h2 style={{marginLeft:100}}>Contamination:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={twentytwo}
       
       onChange={(e) => setTwentyTwo(e.target.checked)}
       onClick={() => handleAudio()}
      
        /> <span id="span">No </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={twentythree}
        onChange={(e) => setTwentyThree(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Mild </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"  value={twentyfour}
          onChange={(e) => setTwentyFour(e.target.checked)}
          onClick={() => handleAudio()}
       /> <span id="span"> Significant</span>
        </label>
       
        </div>
        </div>

        </div>


        <div>
        {/* <Option2
        head="Nereve Injury"
        one="No"
        two="Yes"
        /> */}
        <h2 style={{marginLeft:100}}>Nerve Injury:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={twentyfive}
       
       onChange={(e) => setTwentyFive(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">No </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={twentysix}
        onChange={(e) => setTwentySix(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Yes </span>
        </label>
       
        </div>
        </div>
        </div>

        <div>
        {/* <Option2
        head="Vascular Injury"
        one="No"
        two="Yes"
        /> */}
        <h2 style={{marginLeft:100}}>Vascular Injury:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={twentyseven}
       
       onChange={(e) => setTwentySeven(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">No </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={twentyeight}
        onChange={(e) => setTwentyEight(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Yes </span>
        </label>
       
        </div>
        </div>
        </div>

        <h1 style={{marginLeft:100}}>Fracture Classification</h1>

        <div>
      {/* <Option6 
        head="Upper Limb "
        one="Shoulder "
        two="Arm"
        three="Elbow"
        four="Forearm"
        five="Wrist"
        six="Hand"
      /> */}
      <h2 style={{marginLeft:100}}>Upper Limb:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={twentynine}
       
       onChange={(e) => setTwentyNine(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Shoulder </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirty}
        onChange={(e) => setThirty(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Arm </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirtyone}
        onChange={(e) => setThirtyOne(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Elbow </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirtytwo}
        onChange={(e) => setThirtyTwo(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Forearm </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirtythree}
        onChange={(e) => setThirtyThree(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Wrist </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirtyfour}
        onChange={(e) => setThirtyFour(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Hand </span>
        </label>
       
        </div>
        </div>

      </div>

      <div>
      {/* <Option6 
        head="Lower Limb "
        one="Pelvis "
        two="Hip"
        three="Thigh"
        four="Knee"
        five="Leg"
        six="Foot"
      /> */}

      <h2 style={{marginLeft:100}}>Lower Limb:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={thirtyfive}
       
       onChange={(e) => setThirtyFive(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Pelvis </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirtysix}
        onChange={(e) => setThirtySix(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Hip </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirtyseven}
        onChange={(e) => setThirtySeven(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Thigh </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirtyeight}
        onChange={(e) => setThirtyEight(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Knee </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={thirtynine}
        onChange={(e) => setThirtyNine(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Leg </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fourty}
        onChange={(e) => setFourty(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Foot </span>
        </label>
       
        </div>
        </div>
      </div>
      
        <div>
      {/* <Option5 
        head="Gustilo Anderson Classification "
        one="I "
        two="II"
        three="IIIA"
        four="IIIB"
        five="IIIC"
      /> */}
      <h2 style={{marginLeft:100}}>Lower Limb:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={fourtyone}
       
       onChange={(e) => setFourtyOne(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">I </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fourtytwo}
        onChange={(e) => setFourtyTwo(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">II </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fourtythree}
        onChange={(e) => setFourtyThree(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">IIIA </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fourtyfour}
        onChange={(e) => setFourtyFour(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">IIIB </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fourtyfive}
        onChange={(e) => setFourtyFive(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">IIIC </span>
        </label>
       
        </div>
        </div>
      </div>


        <h1 style={{marginLeft:100}}>Ganga Score :</h1>


        <div>
      {/* <Option5 
        head="Skin and Fascia "
        one="1 "
        two="2"
        three="3"
        four="4"
        five="5"
      /> */}

      <h2 style={{marginLeft:100}}>Skin and Fascia :</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={fourtysix}
       
       onChange={(e) => setFourtySix(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">1</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fourtyseven}
        onChange={(e) => setFourtySeven(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">2 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fourtyeight}
        onChange={(e) => setFourtyEight(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">3 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fourtynine}
        onChange={(e) => setFourtyNine(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">4 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fifty}
        onChange={(e) => setFifty(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">5 </span>
        </label>
       
        </div>
        </div>
      </div>

      <div>
      {/* <Option5 
        head="Musc. & Nerve Unit "
        one="1 "
        two="2"
        three="3"
        four="4"
        five="5"
      /> */}
      <h2 style={{marginLeft:100}}>Musc. & Nerve Unit  :</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={fiftyone}
       
       onChange={(e) => setFiftyOne(e.target.checked)}
       onClick={() => handleAudio()}
      
        /> <span id="span">1</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fiftytwo}
        onChange={(e) => setFiftyTwo(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">2 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fiftythree}
        onChange={(e) => setFiftyThree(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">3 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fiftyfour}
        onChange={(e) => setFiftyFour(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">4 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fiftyfive}
        onChange={(e) => setFiftyFive(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">5 </span>
        </label>
       
        </div>
        </div>
      </div>

      <div>
      {/* <Option5 
        head="Skeletal Structure "
        one="1 "
        two="2"
        three="3"
        four="4"
        five="5"
      /> */}

      <h2 style={{marginLeft:100}}>Skeletal Structure :</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={fiftysix}
       
       onChange={(e) => setFiftySix(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">1</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fiftyseven}
        onChange={(e) => setFiftySeven(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">2 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fiftyeight}
        onChange={(e) => setFiftyEight(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">3 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={fiftynine}
        onChange={(e) => setFiftyNine(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">4 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={sixty}
        onChange={(e) => setSixty(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">5 </span>
        </label>
       
        </div>
        </div>
      
      </div>

       <div>
        {/* <Option 
        head="Co-Morbidity Score  "
        one="0 "
        two="2-4"
        three="4-8"
        four="8-14"
      /> */}

      <h2 style={{marginLeft:100}}>Co-Morbidity Score :</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={sixtyone}
       
       onChange={(e) => setSixtyOne(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">0</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={sixtytwo}
        onChange={(e) => setSixtyTwo(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">2-4 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={sixtythree}
        onChange={(e) => setSixtyThree(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">4-8 </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={sixtyfour}
        onChange={(e) => setSixtyFour(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">8-14 </span>
        </label>
       
        </div>
        </div>
      </div>


      <div>
        {/* <Option3 
          head="Skeletal Trauma"
          one="Ipsilateral Same Limb"
          two="Ipsilateral Other Limb"
          three="Other"
        /> */}
        <h2 style={{marginLeft:100}}>Skeletal Trauma :</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={sixtyfive}
       
       onChange={(e) => setSixtyFive(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Ipsilateral Same Limb</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={sixtysix}
        onChange={(e) => setSixtySix(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Ipsilateral Other Limb </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={sixtyseven}
        onChange={(e) => setSixtySeven(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Other </span>
        </label>
        
       
        </div>
        </div>

        </div>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>
       
       <br></br>
       <br></br>


       <div>
      {/* <Option5 
        head="Associated Injury "
        one="Head Injury "
        two=" Chest Injury"
        three="Abd Injury"
        four="Hypo Tension"
        five="Other"
      /> */}
      <h2 style={{marginLeft:100}}>Associated Injury :</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={sixtyeight}
       
       onChange={(e) => setSixtyEight(e.target.checked)}
       onClick={() => handleAudio()}
      
        /> <span id="span">Head Injury</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={sixtynine}
        onChange={(e) => setSixtyNine(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Chest Injury</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={seventy}
        onChange={(e) => setSeventy(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Abd Injury </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={seventyone}
        onChange={(e) => setSeventyOne(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Hypo Tension </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={seventytwo}
        onChange={(e) => setSeventyTwo(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Other </span>
        </label>
        
       
        </div>
        </div>
      </div>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>
        <br></br>
       <br></br>
      


       <div>
      {/* <Option6 
        head="Associated Medical"
        one="DM "
        two="HTN"
        three="Cardiac Illness"
        four="Respiratory Illness"
        five="Epilesy"
        six="Other"
      /> */}
      <h2 style={{marginLeft:100}}>Associated Medical:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={seventythree}
       
       onChange={(e) => setSeventyThree(e.target.checked)}
       onClick={() => handleAudio()}
      
        /> <span id="span">DM </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={seventyfour}
        onChange={(e) => setSeventyFour(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">HTN </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={seventyfive}
        onChange={(e) => setSeventyFive(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Cardiac Illness </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={seventysix}
        onChange={(e) => setSeventySix(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Respiratory Illness </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={seventyseven}
        onChange={(e) => setSeventySeven(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Epilesy </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={seventyeight}
        onChange={(e) => setSeventyEight(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Other </span>
        </label>
       
        </div>
        </div>
      </div>

        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",top:0,left:100, backgroundColor:"transparent",color:"white"}}></textarea>
 
        <br></br>
       <br></br>

      <h1 style={{marginLeft:100, color:'#cd104'}}>Managment Profile</h1>

      <div>
        {/* <Option2
        head="Pre Hospitalm Care"
        one="Given"
        two=" Not Given"
        /> */}
        <h2 style={{marginLeft:100}}>Pre Hospitalm Care:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={seventynine}
       
       onChange={(e) => setSeventyNine(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Given</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={eighty}
        onChange={(e) => setEighty(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Not Given </span>
        </label>
       
       
        </div>
        </div>
        </div>

        <div>
        
        {/* <Option 
          head="Initial Managment"
          one="Fluid Wash"
          two="POP"
          three=" External Fixator"
          four="Primary Sx"
        /> */}

        <h2 style={{marginLeft:100}}>Initial Managment:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={eightyone}
       
       onChange={(e) => setEightyOne(e.target.checked)}
       onClick={() => handleAudio()}
      
        /> <span id="span">Fluid Wash</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={eightytwo}
        onChange={(e) => setEightyTwo(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">POP </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={eightythree}
        onChange={(e) => setEightyThree(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span"> External Fixator </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={eightyfour}
        onChange={(e) => setEightyFour(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Primary Sx </span>
        </label>
       
       
        </div>
        </div>
        </div>


<div>
        {/* <Option3 
          head="Total Blood Transfusion "
          one="Nil"
          two="1-2 packs"
          three="Greater than 2 packs"
        /> */}

        <h2 style={{marginLeft:100}}>Total Blood Transfusion:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={eightyfive}
       
       onChange={(e) => setEightyFive(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Nil</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={eightysix}
        onChange={(e) => setEightySix(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">1-2 packs </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={eightyseven}
        onChange={(e) => setEightySeven(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span"> Greater than 2 packs </span>
        </label>

        </div>
        </div>
        </div>


       <div>
        
        {/* <Option 
          head="Antibiotics"
          one="None"
          two=" Single Antibiotic"
          three=" Double Antibiotic "
          four="Triple Antibiotic"
        /> */}
        <h2 style={{marginLeft:100}}>Antibiotics:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={eightyeight}
       
       onChange={(e) => setEightyEight(e.target.checked)}
       onClick={() => handleAudio()}
      
        /> <span id="span">None</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={eightynine}
        onChange={(e) => setEightyNine(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Single Antibiotic </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={ninety}
        onChange={(e) => setNinety(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span"> Double Antibiotic  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={ninetyone}
        onChange={(e) => setNinetyOne(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Triple Antibiotic</span>
        </label>
       
       
        </div>
        </div>
        </div>

        
<div>
        
        {/* <Option 
          head="Surgical  Debridement"
          one="Conservative"
          two=" Wash"
          three=" Radical "
          four="Other"
        /> */}
        <h2 style={{marginLeft:100}}>Surgical  Debridement:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={ninetytwo}
       
       onChange={(e) => setNinetyTwo(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Conservative</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={ninetythree}
        onChange={(e) => setNinetyThree(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Wash </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={ninetyfour}
        onChange={(e) => setNinetyFour(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span"> Radical  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={ninetyfive}
        onChange={(e) => setNinetyFive(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Other</span>
        </label>
       
       
        </div>
        </div>
        </div>

        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",top:0,left:530, backgroundColor:"transparent",color:"white"}}></textarea>


        <div>
        {/* <Option3 
          head="Duration Of Surgery  "
          one="Less Than 1 hour"
          two="1-2 hrs"
          three="Greater than 2 hours"
        /> */}

        <h2 style={{marginLeft:100}}>Duration Of Surgery:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={ninetysix}
       
       onChange={(e) => setNinetySix(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Less Than 1 hour</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={ninetyseven}
        onChange={(e) => setNinetySeven(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">1-2 hrs </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={ninetyeight}
        onChange={(e) => setNinetyEight(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span"> Greater than 2 hours  </span>
        </label>
        </div>
        </div>
        </div>

<div>
        {/* <Option3 
          head="Blood Loss  "
          one=" Less Than 100 ml "
          two="100-200 ml"
          three="Greater Than 200 ml"
        /> */}

        <h2 style={{marginLeft:100}}>Blood Loss :</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={ninetynine}
       
       onChange={(e) => setNinetyNine(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Less Than 100 ml</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundred}
        onChange={(e) => setHundred(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">100 -200 ml </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredone}
        onChange={(e) => setHundredOne(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span"> Greater than 200 ml  </span>
        </label>
        </div>
        </div>
        </div>


<div>
      {/* <Option5 
        head="Implant Used"
        one="None "
        two="EX. Fix"
        three="Plating"
        four="Nailing"
        five="Other"
      /> */}
      <h2 style={{marginLeft:100}}>Implant Used:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={hundredtwo}
       
       onChange={(e) => setHundredTwo(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">None</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredthree}
        onChange={(e) => setHundredThree(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">EX. Fix </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredfour}
        onChange={(e) => setHundredFour(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span"> Plating  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredfive}
        onChange={(e) => setHundredFive(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span"> Nailing  </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredsix}
        onChange={(e) => setHundredSix(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span"> Other  </span>
        </label>
        </div>
        </div>
      </div>
        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>

      
        <div>
        {/* <Option2
        head="Soft Tissue Procedure "
        one="Yes"
        two=" No"
        /> */}
        <h2 style={{marginLeft:100}}>Soft Tissue Procedure:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={hundredseven}
       
       onChange={(e) => setHundredSeven(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">Yes</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredeight}
        onChange={(e) => setHundredEight(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">No </span>
        </label>
        </div>
        </div>
        </div>

        <div>
      {/* <Option5 
        head="Intra-Op Complication"
        one="Vascular Injury "
        two="Nerve Injury"
        three="Tendon"
        four="Bone Loss"
        five="Other"
      /> */}
      <h2 style={{marginLeft:100}}>Intra-Op Complication:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={hundrednine}
       
       onChange={(e) => setHundredNine(e.target.checked)}
       onClick={() => handleAudio()}
      
        /> <span id="span">Vascular Injury</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredten}
        onChange={(e) => setHundredTen(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Nerve Injury </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredeleven}
        onChange={(e) => setHundredEleven(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Tendon </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredtwelve}
        onChange={(e) => setHundredTwelve(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Bone Loss </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredthirteen}
        onChange={(e) => setHundredThirteen(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Other </span>
        </label>
        </div>
        </div>
      </div>

        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>
 

        <div>
        {/* <Option3 
          head="Local Post-Op Complication  "
          one=" None"
          two="Mild Infection"
          three="Severe Infection"
        /> */}

        <h2 style={{marginLeft:100}}>Local Post-Op Complication:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={hundredfourteen}
       
       onChange={(e) => setHundredFourteen(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">None</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredfifteen}
        onChange={(e) => setHundredFifteen(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Mild Infection </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredsixteen}
        onChange={(e) => setHundredSixteen(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Severe Infection </span>
        </label>
        </div>
        </div>

        </div>


<div>
      {/* <Option6 
        head="Post-Op Complication"
        one="None "
        two="ARDS"
        three="Pul. Embolism"
        four="ARF"
        five=" Vascular Injury"
        six="Other"
      /> */}

      <h2 style={{marginLeft:100}}> Post-Op Complication:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={hundredseventeen}
       
       onChange={(e) => setHundredSeventeen(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">None</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredeighteen}
        onChange={(e) => setHundredEighteen(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">ARDS </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundrednineteen}
        onChange={(e) => setHundredNineteen(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Pul. Embolism </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" value={hundredtwenty}
       
       onChange={(e) => setHundredTwenty(e.target.checked)}
       onClick={() => handleAudio()}
        
      
        /> <span id="span">ARF</span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredtwentyone}
        onChange={(e) => setHundredTwentyOne(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Vascular Injury </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"   value={hundredtwentytwo}
        onChange={(e) => setHundredTwentyTwo(e.target.checked)}
        onClick={() => handleAudio()}
        /> <span id="span">Other</span>
        </label>
        </div>
        </div>
      </div>


        <textarea id="subject" name="subject" placeholder="Mention if other" style={{bottomBorder:10,position:"relative",left:100, backgroundColor:"transparent",color:"white"}}></textarea>

      </div>
      
        </div>
 
        
        </div>     
 
  

  }

</div>);
}


export default App;

 