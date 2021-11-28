import React from "react";
import './errorMessage.css'
import img from './error.jpg';
const ErrorMessage404= ()=>{
  
 return (
  <>

    {<img src={img}  all='error' />} 
   <span> 404. That’s an error.
      The requested URL search was not found on this server. That’s all we know 404
    </span>
  </>
 )
}
export default ErrorMessage404

