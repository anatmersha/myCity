import React, { useReducer } from "react";
import axios from "axios";
import { AiOutlineCheck } from "react-icons/ai";
import dataContext from "../Context/dataContext";
import { Navigate } from "react-router-dom";
import registerStyle from "../css/Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [register, dispatch] = useReducer(registerReducer,{})
  function RegisterToapp() {
    const API_KEY = "AIzaSyCiHfWGwawt0DYm-ZJf2FutKLYKZ63JgJE";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    axios
      .post(url, {
        email: register.email,
        password: register.password,
      })
      .then(function (response) {
        console.log(response);
        dispatch({type:'validtionMessege',value:<AiOutlineCheck style={{ color: "green" }}/>})
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }
return (
    <div className={registerStyle.register}>

      <div className={registerStyle.registerBox}>
      <h1 style={{marginRight: "20.5vw", color: "cornflowerblue", fontSize: "50px"}}>הרשמה</h1>
      <form
      className={registerStyle.registerForm}
        onSubmit={(e) => {
          e.preventDefault();
          RegisterToapp()
          
        }}
        onChange={(e)=>dispatch({type:e.target.name,value:e.target.value})}
      >
        <input type="text" name="firstName"  placeholder="שם פרטי" />
        <input type="text" name="lastName" placeholder="שם משפחה" />
        <input type="number" name="id" placeholder="תעודת זהות" />
        <input type="text" name="city" placeholder="עיר"/>
        <input type="email" name="email" placeholder="A@EMAIL.COM אימייל" />
        <input type="email" name="confirmEmail" placeholder="A@EMAIL.COM אישור אימייל" />
        <input type="password" name="password" placeholder="סיסמא" />
        <input type="password" name="confirmPassword" placeholder="אישור סיסמא" />
          <input type="submit" className={registerStyle.registerBtn} disabled={!register.submit} />
      </form>
      {/* <p style={{float: "right", marginRight: "19.5vw", fontSize: "14px"}}>Already have an account <Link to="/Login">Login</Link></p> */}
      <p style={{ color: "red" }}>{register.validtionMessege}</p>/
      </div>
      <div className={registerStyle.logo}>
        <h1 className={registerStyle.logoHeader}>myCity</h1>
      </div>
    </div>
  );
}
function registerReducer(state,action){
  const valid=validateResitration(state)
  console.log(valid);
  return {...state,[action.type]:action.value,submit:valid.status}
}
function validateResitration(registerState){
  const {password,confirmPassword,email,confirmEmail,firstName,lastName,city,id}=registerState
  if(password?.length>=6&&confirmPassword!==password&&email!==confirmEmail)return {status:false,data:'password and email still not confirmed'}
  const inputsErr=[]
if (!email?.match(/@/g)?.length === 1) inputsErr.push('@');
 if (!email?.match(/.com/gi)?.length === 1) inputsErr.push('Top-level Domain');
 if (!email?.match(/.co.il/gi)?.length === 1) inputsErr.push('Top-level Domain');
 if (!email?.match(/.org/gi)?.length === 1) inputsErr.push('Top-level Domain');
 if (!email?.match(/.net/gi)?.length === 1) inputsErr.push('Top-level Domain');
 if (!password?.match(/[A-Z]/g)) inputsErr.push('capitalcase');
 if (!password?.match(/[a-z]/g)) inputsErr.push('lowercase');
 if (!password?.match(/[1-9]/g)) inputsErr.push('numeric');
 if(!firstName?.match(/[\Wא-ת]/)&&firstName?.indexOf('_')===-1)inputsErr.push('firstName')
 if(!lastName?.match(/[\Wא-ת]/)&&lastName?.indexOf('_')===-1)inputsErr.push('lastName')
//  if(!city?.match(/\W/))inputsErr.push('city')
 if(!id?.length&&!id?.match(/\D/))inputsErr.push('id')
 console.log(inputsErr);
if(inputsErr.length===0&&inputsErr.indexOf('Top-level Domain')===inputsErr.lastIndexOf('Top-level Domain'))return {status:true,data:'all fields passed their tests'}
else return {status:false,data:inputsErr}
}
