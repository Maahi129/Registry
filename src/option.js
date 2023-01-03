import React from 'react'

const Option = (props) => {
  return (
    <div>
    <h2 style={{marginLeft:100}}>{props.head}:</h2>
      <div className="container"> 
        <div> 
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">{props.one} </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">{props.two} </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">{props.three} </span>
        </label>
        <label>
        <input type="checkbox" name="" id="cell"  data-on="Yes" data-off="No"/> <span id="span">{props.four} </span>
        </label>
        </div>
        </div>
    </div>
   
  )
}

export default Option
