import React, { useState } from 'react'
import SignIn from './SignIn'
import image from '../Images/wallpaperbetter.com_1920x1080 (1).jpg'
import Signup from './Signup'
import axios from 'axios'
import { setSession } from './LocalStorageService'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()

  const initialFormState = {
    password: '',
    public_address: '',
    name: '',
    email: '',
  }
  const initialState = {
    password: '',
    email: '',
  }

  const [register, setRegister] = useState('')
  const [form, setForm] = useState('')
  const [formType, setFormType] = useState('signIn')
  const [signUpData, setSignUpData] = useState(initialFormState)
  const [logInData, setLogInData] = useState(initialState)

  function onChange(e) {
    e.persist()
    setSignUpData(() => ({
      ...signUpData,
      [e.target.name]: e.target.value,
    }))
  }

  function onChangeLogIn(e) {
    e.persist()
    setLogInData(() => ({
      ...logInData,
      [e.target.name]: e.target.value,
    }))
  }

  function handelSignUp(e) {
    e.preventDefault()
    console.log(signUpData)
    axios
      .post('https://gethub-server.herokuapp.com/user/register', signUpData)
      .then(function (response) {
        //handle success
        history.goBack()

        console.log(response)
      })
      .catch((e) => {
        throw e
      })
  }

  function handelLogInUser(e) {
    e.preventDefault()
    axios
      .post('https://gethub-server.herokuapp.com/user/login', logInData)
      .then(function (response) {
        //handle success
        setSession(response.data.token)
        console.log(response)
        history.push('/Dashboard')
      })
      .catch((e) => {
        throw e
      })
    console.log(logInData)
  }

  function renderForm() {
    switch (formType) {
      case 'signUp':
        return (
          <Signup
            form={form}
            onChange={onChange}
            handelLogIn={handelLogIn}
            handelSignUp={handelSignUp}
          />
        )

      case 'signIn':
        return (
          <SignIn
            onChangeLogIn={onChangeLogIn}
            handelLogInUser={handelLogInUser}
            handelRegister={handelRegister}
          />
        )
      default:
        return null
    }
  }

  const handelRegister = () => {
    setFormType('signUp')

    setRegister('-translate-x-full ease-out duration-300')
    setForm('translate-x-full ease-out duration-400')
  }

  const handelLogIn = () => {
    setFormType('signIn')

    setRegister('ease-out duration-300')
  }

  return (
    <div>
      <div className="flex flex-wrap w-full">
        {renderForm(formType)}

        <div className={`w-1/2 shadow-2xl ${register}`}>
          <img
            className="hidden rounded object-cover w-full h-screen md:block"
            src={image}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
