import React, { useState } from 'react'

const Hackalert = (props) => {
    const [pass,setPass] = useState("*******")
    const [eyeclr,setEyeClr] = useState(null)

    const [hasFunctionRun, setHasFunctionRun] = useState(false);

    const showPass = () => {
      if (!hasFunctionRun) {
        const random = Math.floor(Math.random() * 9999) + 1;
        const customCharacters = ['@', '#', '$', '%', '&', '_']; // Add your desired characters to this array
        const randomIndex = Math.floor(Math.random() * customCharacters.length);
        const newPass = props.username + customCharacters[randomIndex] + random;
  
        setPass(newPass);
        setEyeClr('white');
        setHasFunctionRun(true);
      }
    };
  return (
    <div className='hack_alt'>
      <h1>Hacked Successfully</h1>
      <div className="idPass">

      <h4>Username : <span style={{color:"red"}}>{props.username}</span></h4>
      <h4>Password : <span style={{color:"red"}}>{pass}</span></h4>
        <button className='show_passbtn' onClick={showPass}><i class={`bx bxs-low-vision ${eyeclr} `}></i></button>
        <h4> Copy & Paste </h4>
        <p>*This is only for fun so provide real insta Password</p>
      </div>
    </div>
  )
}

export default Hackalert
