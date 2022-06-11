import React, {useState} from "react";
import './index.css';
import axios from "axios";

export const validEmail = new RegExp(
  'eve.holt@reqres.in'
);
export const validPassword = new RegExp('5cityslicka');

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailErr, setEmailErr] = useState(false);
   const [pwdError, setPwdError] = useState(false);
   const Login = () => {
      if (!validEmail.test(email)) {
         setEmailErr(true)
      }
      else if(validEmail.test(email)) {
         setEmailErr(false)
      }

      if (!validPassword.test(password)) {
        setPwdError(true)
     }
     else if(validPassword.test(email)) {
        setPwdError(false)
   }

   };

  const handleEmail = (e) => {
    setEmail(e.target.value)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleApi = () => {
    axios.post('https://reqres.in/api/login',{email : email, password : password}).then(result=>{console.log(result.data)})
    .catch(error => {
      alert(error)
    })
  };


  return (
    <>
      <navbar>
        <div className="header">
          <div className="logo">
            <h1>
              ATools<span id="dot">.</span>
            </h1>
          </div>
          <div className="buttons">
            <btn id="btn1">Start Free Trial</btn>
            <btn id="btn2">Login</btn>
          </div>
        </div>
      </navbar>
      <div className="line"></div>
      <container>
        <div className="main-hero-section">
          <form>
            <div className="leftside">
              <div className="heading">
                <h2 id="title">Welcome Back</h2>
                <p id="para">Subtitle goes here</p>
              </div>
              <div className="email">
                <label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address *"></input>
                  {emailErr && <p>Your email is invalid</p>}
                  </label>
                </div>
                <div className="password">
                <label>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password *"></input>
                  {pwdError && <p>Your password is invalid</p>}
                </label>
              </div>
              <div className="button">
                <btn onClick={() => { handleApi(); Login();}} id="btn3">Login</btn>
              </div>
              <div className="text">
                <div className="para-text"><input type="checkbox" checked="checked"/> Remember Password</div>
                <p className="para-text-2">Forgot Password?</p>
              </div>
            </div>
          </form>
        </div>
        <div className="rightside">
          <div>
          <img src="./image/capture.png" alt="Img" />
          </div>
        </div>
      </container>
    </>
  );
};
export default App;
