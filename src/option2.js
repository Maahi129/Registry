import React, { useState } from 'react'
import s1 from './static/popin.mp3';
import s2 from './static/popout.mp3';


const Option2 = (props) => {

  const [isChecked, setIsChecked] = useState(false);

 
    const sound = () => {
      var audio = new Audio(s1);
      audio.play();
    }
    const playOff = () => {
      var audio = new Audio(s2);
      audio.play();
    }

    if(isChecked) {
      sound();
    }else{
      playOff();
    }


  return (
    <div>
    <h2 style={{marginLeft:100}}>{props.head}:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No" 
        onClick={(checked)=> checked={isChecked} }
        onChange={() => setIsChecked(!isChecked)}
        /> <span id="span">{props.one} </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"    
        onClick={(checked)=> checked={isChecked} }
        onChange={() => setIsChecked(!isChecked)}
        /> <span id="span">{props.two} </span>
        </label>
        </div>
        </div>
    </div>
   
  )
}

export default Option2;