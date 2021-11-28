import React from "react";
import './errorMessage.css'
import img from './error.jpg';
const ErrorMessage= ()=>{
  
 return (
  <>
   
    {/* <img src={process.env.PUBLIC_URL + 'img/error.jpg'} />  */}
    {<img src={img}  all='error' />} 
   <span> Something goes wrong</span>
  </>
 )
}
export default ErrorMessage

