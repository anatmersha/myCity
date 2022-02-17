import React, { useContext, useReducer } from 'react'
import axios from 'axios'
import { AiOutlineCheck } from 'react-icons/ai'
import dataContext from '../Context/dataContext'
import { Navigate } from 'react-router-dom'
import loginStyle from '../css/Login.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
  const [login, loginDispatch] = useReducer(loginReducer, {})
  const { state, dispatch } = useContext(dataContext)

  console.log(state)

  function LoginToApp() {
    const API_KEY = 'AIzaSyCT6VuVpGPWYsIBYfsDJB4zwb_ESOifiAU'
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

    axios
      .post(url, {
        email: login.email,
        password: login.password,
      })
      .then(function (response) {
        const user = state.users?.find(
          (user) => user?.email === response.data.email,
        )
        if (user) {
          dispatch({ type: 'auth', value: response.data.email })
          dispatch({ type: 'currUser', value: user })
          dispatch({
            type: 'validtionMessege',
            value: <AiOutlineCheck style={{ color: 'green' }} />,
          })
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  }
  return (
    <div className={loginStyle.login}>
      <div className={loginStyle.loginBox}>
        <h1
          style={{
            marginRight: '20.5vw',
            color: 'cornflowerblue',
            fontSize: '50px',
          }}
        >
          התחברות
        </h1>
        <form
          className={loginStyle.loginForm}
          onSubmit={(e) => {
            e.preventDefault()
            LoginToApp()
          }}
          onChange={(e) =>
            loginDispatch({ type: e.target.name, value: e.target.value })
          }
        >
          <input type="email" name="email" placeholder="A@EMAIL.COM אימייל" />
          <input type="password" name="password" placeholder="סיסמא" />
          <input
            type="submit"
            className={loginStyle.loginBtn}
             disabled={!login.submit}
          />
        </form>
        <p style={{ float: 'right', marginRight: '19.5vw', fontSize: '14px' }}>
          Don`t have an account yet <Link to="/Login">Register</Link>
        </p>
        <p style={{ color: 'red' }}>{login.validtionMessege}</p>
      </div>

      <div className={loginStyle.logo}>
        <h1 className={loginStyle.logoHeader}>myCity</h1>
      </div>
    </div>
  )
}

function loginReducer(state, action) {
  const valid = validateLogin(state)
  console.log(valid)
  return { ...state, [action.type]: action.value, submit:true}
}

function validateLogin(loginState) {
  const { password, email } = loginState
  if (password?.length > 6)
    return { status: false, data: 'password still not confirmed' }
  const inputsErr = []
  if (!email?.match(/@/g)?.length === 1) inputsErr.push('@')
  if (!email?.match(/.com/gi)?.length === 1) inputsErr.push('Top-level Domain')
  if (!email?.match(/.co.il/gi)?.length === 1)
    inputsErr.push('Top-level Domain')
  if (!email?.match(/.org/gi)?.length === 1) inputsErr.push('Top-level Domain')
  if (!email?.match(/.net/gi)?.length === 1) inputsErr.push('Top-level Domain')
  if (!password?.match(/[A-Z]/g)) inputsErr.push('capitalcase')
  if (!password?.match(/[a-z]/g)) inputsErr.push('lowercase')
  if (!password?.match(/[1-9]/g)) inputsErr.push('numeric')
  if (
    inputsErr.length === 0 &&
    inputsErr.indexOf('Top-level Domain') ===
      inputsErr.lastIndexOf('Top-level Domain')
  )
    return { status: true, data: 'all fields passed their tests' }
  else return { status: false, data: inputsErr }
}
