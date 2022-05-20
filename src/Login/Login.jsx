import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../Images/chartimg.png';
import Swal from 'sweetalert2';


const Login = () => {
  const [loginData, setLoginData] = useState();
  const [check, setCheck] = useState(false);
  const [checkErr, setCheckErr] = useState('')
  const [passError, setPassError] = useState('')
  const [numError, setNumError] = useState('')
  const [passValid , setPassValid] = useState(false);
  const [validErr, setValidErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailValid, setEmailValid] = useState(false)
  const [numValid , setNumValid] = useState(false)
  const navigate = useNavigate();

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  const EmailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const numReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  const BlurHandler = (e) => {
      const name = e.target.name;
      const val = e.target.value;
     
      const data = {...loginData};
      data[name] = val;
        console.log('watch', data)
        if(passValid === true){
            setPassError('')
        }
        if(numValid === true){
            setNumError('') 
            console.log('duktese isNaN')
        }
     
      setLoginData(data)
  }
   
  const SubmitHandler = (e) => {
    e.preventDefault()
      const phone = parseInt(loginData?.phone)
        if(loginData?.email && loginData?.phone && loginData?.password && loginData?.name)
        {   console.log(' Phone ', phone)
            if(loginData?.password !== loginData?.password2){
                setPassError('Password not matched *')
                    
            }
            if(check === false){
                setCheckErr('Agree with Terms And Condition')
            }
            if(numValid === true && emailValid === true && loginData.password === loginData.password2 && check && passValid === true) {
                navigate('/Home')
            }
            else{
                Swal.fire(
                    'ERROR!',
                    'please fillup the form correctly',
                    'error'
                  )
              }
        }
      else{
        Swal.fire(
            'ERROR!',
            'please fillup the form correctly',
            'error'
          )
      }
  }

  return (
    <div className='Login'>
        <div className='Login__ImageDiv'>
            <img src={loginImg} className='Login__ImageDiv--image' alt="" />
            <div className='Login__ImageDiv__TextDiv'>
                <h4>Choose a date range</h4>
                <p>Lorem ipsum dolor adipisicing elit. Doloremque, provident. <br /> consectetur adipisicing elit. Doloremque, provident.</p>
            </div>
        </div>
        <form className="Login__LoginForm" >
            <h4 className='Login__LoginForm__title'>Create an account</h4>
            <label className='Login__LoginForm--form__label'>Your email address</label>
            <input onChange={(e) => {
                BlurHandler(e)
                if(EmailReg.test(e.target.value.toLowerCase())){
                    setEmailErr('')
                    setEmailValid(true)
                }
                else{
                    setEmailErr('Please insert a valid email address')
                    setEmailValid(false)
                }
            }} name="email" className="Login__LoginForm--form__input" type="email" />
            <p className='Login_LoginForm--Error'>{emailErr}</p>

            <label className='Login__LoginForm--form__label'>Your password</label>
            <input onChange={(e) => {
                BlurHandler(e)
                if(regex.test(e.target.value)){
                    setValidErr('')
                    setPassValid(true)
                }
                else{
                    setValidErr(`The password must be eight characters and must contain at least 1 lowercase , 1 uppercase ,1 numeric character and one special character `)
                    setPassValid(false)
                }
            }}name="password" className="Login__LoginForm--form__input" type="password" />
            <p className='Login_LoginForm--Error'>{validErr}</p>
            <label className='Login__LoginForm--form__label'>Confirm your password</label>
            <input onChange={BlurHandler} name="password2" className="Login__LoginForm--form__input" type="password" />
            <p className='Login_LoginForm--Error'>{passError}</p>

            <label className='Login__LoginForm--form__label'>Your full name</label>
            <input onChange={BlurHandler} name="name" className="Login__LoginForm--form__input" type="text" />

            <label className='Login__LoginForm--form__label'>Your phone number</label>
            <input onChange={(e) => {
                BlurHandler(e)
                if(numReg.test(e.target.value)){
                    setNumError('')
                    setNumValid(true)
                }
                else{
                    setNumError('Phone number should be number not text *')
                    setNumValid(false)
                }
            }} name="phone"  className="Login__LoginForm--form__input__phone" type="text" />
            <p className='Login_LoginForm--Error'>{numError}</p>

             <p className='Login__LoginForm--term__text'> <input onClick={() => {
                  setCheck(!check)
                  setCheckErr('')
             }} type="checkbox" /> I read and agree Terms and Conditions </p>
             <p className='Login_LoginForm--Error'>{checkErr}</p>
             
            <button className='btn Login__LoginForm--btn' onClick={SubmitHandler}>Create account</button>
        </form>
    </div>
  );
}

export default Login;


// loginData?.phone?.length > 2 &&
