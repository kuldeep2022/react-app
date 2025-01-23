// import './App.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { useState } from 'react';


function App({dataStatus}) {

  const [LoginPage, setLoginPage] = useState(false);
  const [SignupPage, setSignupPage] = useState(true);

  function signupPageActive(){
    setLoginPage(false)
    setSignupPage(true)
  }
  function loginPageActive(){
    setLoginPage(true)
    setSignupPage(false)
  } 

  return (
    <div className="App d-flex min-vh-100 bg-light py-4 py-xl-5">
      <div className="container m-auto">
        <div className="row justify-content-center">
            <div className='col-12 col-md-8 col-xl-6'>
              <div className='bg-white p-4 p-xl-5 shadow-sm rounded-3'>
                {
                  LoginPage ? 
                  <>
                    <Login /> 
                    <p className="mt-4 text-end">Don't have an account? <a href="#" className="ms-1 d-inline-block" onClick={signupPageActive}>Sign Up</a></p>
                  </>
                  : 
                  <>
                    <Signup />
                    <p className="mt-4 text-end">Already a user? <a href="#" className="ms-1 d-inline-block" onClick={loginPageActive}>Sign in</a></p>                  
                  </>
                }                
              </div>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
