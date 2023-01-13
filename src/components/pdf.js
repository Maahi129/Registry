import jsPDF from 'jspdf'
import React  from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
// import Copypdf from './copy_pdf'
import Formhtml from './form_html'
import './pdf.css'
// import ReactToPrint from 'react-to-print'
// import Patient from '../patient'
// import { useDispatch } from 'react-redux';
// import Formhtml from './form_html';
// import './pdf.css'

 


const Pdf = () => {
   
    // const [error] = useState(true);

    // const dispatch = useDispatch();

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     dispatch(pdf(
    //         error
    //     ))
    // }

    const user = useSelector(selectUser);

   

    const pdf = () => {
        var doc = new jsPDF("p","mm",[297,210]);

       
        
        doc.html(document.querySelector("#content"),
        {
            callback: function(pdf){
                pdf.save("me.pdf")
            }
        })
    }
  //  const componentRef = useRef();


  return (
    <div>
    <div>
     <button id = "btn-pdf" onClick={() => 
      {
        pdf()
        // setError(false)
      }
      }>Download</button> 
    
     <button id="btn-pdf"><a href='/Registry'> Register</a> </button>
    
    
      {/* <ReactToPrint 
       trigger={() => <button id="btn-pdf">Print</button>}
       content={() => componentRef.current}
      />
      <Copypdf ref={componentRef} /> */}
      
      </div>
      
    <div id="content">
      <form>
      <table class="size-table t1">
            <tbody id="t1">
                <caption>PATIENT DETAILS</caption>
                  
                   <tr   style={{backgroundColor:"rgb(192, 164, 164)"}}> <td id="c2">  Name   : {user.name} </td> <td  id="c2" > Name of Hospital : {user.name_of_hospital} </td>    </tr> 
                   <tr > <td id="c2" > Age/Sex: {user.age} </td> <td id="c2" >State : {user.state} </td>   </tr> 
                   <tr > <td id="c2" > Address : {user.address} </td> <td id="c2">Consultant  Surgeon : {user.consultant_surgeon} </td>   </tr> 
                   <tr > <td id="c2" > Occupation: {user.occupation}</td></tr> 
                   <tr> <td  id="c2" > Height: {user.height} </td>  </tr> 
                   <tr> <td id="c2"> Weight: {user.weight} </td> </tr> 
                
            </tbody>
        </table>
        <Formhtml />
        </form>
    </div>
    </div>
  )
}

export default Pdf


  

