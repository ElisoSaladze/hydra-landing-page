import React from 'react'
import '../styles/Form.css'
import line from '../assets/Vector 24.svg'
import line2 from '../assets/Vector 16.svg'
import { useState } from 'react'
const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    tellSomething: ""
  });
  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value});
  };
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value});
  };
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value});
  };
  return (
    <div className='center' id='join'>
    <div className='form-div'>
        <h4>JOIN HYDRA</h4>
        <img className="mobile" src={line} alt="line" />
        <img className="not-mobile" src={line2} alt="line" />
        <h5>Let’s Build Your VR Experience</h5>
      <form>
        <input onChange={handleFirstNameInputChange} type="text" placeholder='First Name' id="fname" name="fname"/>
        <input onChange={handleLastNameInputChange} type="text" placeholder='Last Name' id="lname" name="lname"/>
        <input onChange={handleEmailInputChange} type="text" placeholder='Email' id="email" name="email"/>
        <input type="tel" placeholder='Phone Number' id="tel" name="tel"/>
        <input className='subj' type="text" placeholder='Subject' id="subject" name="subject"/>
        <textarea placeholder='Tell Us Something' name="text"></textarea>
        <button onClick={(event) => event.preventDefault()} type="submit" class="btn-2">SEND TO HYDRA</button>
      </form>
    </div> 
    </div>
  )
}

export default Form
