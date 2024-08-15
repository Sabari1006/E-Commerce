import React,{ useState }  from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

    const[currState,setCurrState] =useState("Login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                
                <input type="email" placeholder='Your e-mail' required />
                <input type="Password" placeholder='Password' required />            
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing,i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>

            }
        </form>

    </div>
  )
}

export default LoginPopup