import * as Components from "../../Components/logincomponents/login"
import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash , faEye, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {useRive, useStateMachineInput} from 'rive-react';
import {useEffect, useState} from "react";
import { useStateContext } from "../../Contexts/ContextProvider";
import Sinup from "./Sinup";
import {Link} from "react-router-dom"

const STATE_MACHINE_NAME = "Login Machine";
export default function Login() {
    const { login , errors,isloading,  } = useStateContext();
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const {rive, RiveComponent} = useRive({
        src: "2244-4437-animated-login-screen.riv",
        autoplay: true,
        stateMachines: STATE_MACHINE_NAME
    })




    useEffect(() => {
        setLook();
    }, [email])

    const stateSuccess = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'trigSuccess'
    )
    const stateFail = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'trigFail'
    )
    const stateHandUp = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'isHandsUp'
    )

    const stateCheck = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'isChecking'
    )
    const stateLook = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'numLook'
    )


    const triggerSuccess = () => {
        stateSuccess && stateSuccess.fire();
    }
    const triggerFail = () => {
        stateFail && stateFail.fire();
    }


    const setHangUp = (hangUp) => {
        stateHandUp && (stateHandUp.value = hangUp);
    }

    const setLook = () => {
        if (!stateLook || !stateCheck || !setHangUp) {
            return;
        }
        setHangUp(false)
        setCheck(true);
        let nbChars = 0;
        if (email) {
            nbChars = parseFloat(email.split('').length);
        }

        let ratio = nbChars / parseFloat(41);
        console.log("ratio " + ratio);

        let lookToSet = ratio * 100 - 25
        console.log("lookToSet " + Math.round(lookToSet));
        stateLook.value = Math.round(lookToSet);
    }
    const setCheck = (check) => {
        if (stateCheck) {
            stateCheck.value = check;
        }

    }




    if (rive) {
        console.log(rive.contents);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if ( await login({ email, password,remember_token:true})) {
            triggerSuccess();

        }else{
            triggerFail();

        }

      };
    const [signIn, toggle] = useState(true);

        const [showPassword, setShowPassword] = useState(false);

        const toggleShowPassword = () => {
            setHangUp(true);
          setShowPassword(!showPassword);
        };
     return(
        <div className="ayoub p-2">
         <Components.Container>
             <Components.SignUpContainer signinin={signIn}>
           <Sinup/>
        </Components.SignUpContainer>

        <Components.SignInContainer signinin={signIn}>
          <Components.Form  onSubmit={handleSubmit} >
          <div className="panda" style={{ borderRadius: '50%', border: '3px solid #32bbb4', width: '140px', height: '140px' ,}}>
  <div style={{ borderRadius: '50%', width: '135px', height: '135px', overflow: 'hidden' }}>
    <RiveComponent style={{ width: '100%', height: '100%' }} src="2244-4437-animated-login-screen.riv" />
  </div>
</div>
{errors.email && <small  className="spano text-lg   text-red-600 "  >{errors.email[0]}</small>}


              <div className="infield">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  fontSize={22}
                  className="absolute mx-2 my-3 text-slate-500"
                />
                <Components.Input
                disabled={isloading}
                  className="inp"
                  type="email"
                  autoComplete="email"
                 autoFocus
                  placeholder="Email"
                  required
                  onFocus={() => setHangUp(false)}

                  onChange={(event) => setemail(event.target.value)}
                  value={email}
                />

                <label className="label"></label>
              </div>
              <div className="infield">
                <FontAwesomeIcon
                  icon={faLock}
                  fontSize={22}
                  className="absolute mx-2 my-3 text-slate-500"
                />
                <Components.Input
                disabled={isloading}
                            type={showPassword ? "text" : "password"}

                  placeholder="Password"
                  className="inp"

                  autoComplete="current-password"
                 autoFocus
                  required
                  onChange={(event) =>
                    {
                        setHangUp(true);
                        setPassword(event.target.value);
                        //setHangUp(false);
                    }}
                    //onFocus={() => setHangUp(true)}
                    //onE
                    value={password}
                />
                 <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          fontSize={18}
          className="absolute ml-[-35px]  my-4 text-slate-300 cursor-pointer"
          onClick={toggleShowPassword}
        />
                <label className="label"></label>
              </div>

             <Link to='/forgetpassword'> <Components.Anchor >Forgot your password?</Components.Anchor></Link>
              <label className="label"></label>

              <Components.Button
              type="submit"
              disabled={isloading}



               onMouseOver={() => setHangUp(false)}
               onFocus={() => setHangUp(false)}

               //onClick={() => { setIsLoading(true);}}

                   //setCheck(true);
                  // if (checkLogin(email, password)) {
                   //    triggerSuccess()
                   //} else {
                  //     triggerFail();
                  // }
              // }}
               >{isloading ? "Sign In..." : "Sign In"}</Components.Button>

          </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinin={signIn}>
                 <Components.Overlay signinin={signIn}>

                 <Components.LeftOverlayPanel signinin={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinin={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton>
                     </Components.RightOverlayPanel>

                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </div>
     )
}





{/*
import * as Components from '../../Components/logincomponents/login';
import React, { useState, useEffect, useRef, ChangeEvent, SyntheticEvent } from 'react';
import { useRive, Layout, Fit, Alignment } from 'rive-react';

function useStateMachineInput(initialState) {
  const [value, setValue] = useState(initialState);

  // Define any additional logic or actions you need
  // ...

  return value;
}

const Login = (riveProps = {}) => {
  const STATE_MACHINE_NAME = 'Login Machine';
  const LOGIN_PASSWORD = 'teddy';
  const LOGIN_TEXT = 'login';
  const inputLookMultiplier = 1;

  const isCheckingInput = useStateMachineInput(false);
  const numLookInput = useStateMachineInput(0);
  const trigSuccessInput = useStateMachineInput(false);
  const trigFailInput = useStateMachineInput(false);
  const isHandsUpInput = useStateMachineInput(false);

  const { RiveComponent } = useRive({
    src: 'login-teddy.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    ...riveProps,
  });

  const [userValue, setUserValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [LoginButtonText, setLoginButtonText] = useState(LOGIN_TEXT);

  const onUsernameChange = (e) => {
    const newVaL = e.target.value;
    setUserValue(newVaL);

    if (!isCheckingInput) {
      isCheckingInput = true;
    }

    const numChars = newVaL.length;
    numLookInput.value = numChars * inputLookMultiplier;
  };

  const onUsernameFocus = () => {
    isCheckingInput = true;

    if (numLookInput.value !== userValue.length * inputLookMultiplier) {
      numLookInput.value = userValue.length * inputLookMultiplier;
    }
  };

  const onSubmit = (e) => {
    setLoginButtonText('Checking...');
    setTimeout(() => {
      setLoginButtonText(LOGIN_TEXT);
      passValue === LOGIN_PASSWORD ? trigSuccessInput.fire() : trigFailInput.fire();
    }, 1500);
    e.preventDefault();
    return false;
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef?.current && !inputLookMultiplier) {
      setInputLookMultiplier(inputRef.current.offsetWidth / 100);
    }
  }, [inputRef]);
  const [signIn, toggle] = React.useState(true);
  return (
    <div className="ayoub">
      <Components.Container>
        <Components.SignUpContainer signinin={signIn}>
          <Components.Form onSubmit={onSubmit}>
            <Components.Title>Create Account</Components.Title>
            <div className="infield">
              <FontAwesomeIcon
                icon={faEnvelope}
                fontSize={22}
                className="absolute mx-2 my-3 text-slate-500"
              />
              <Components.Input
                className="inp"
                type="text"
                placeholder="Name"
                required
              />
              <label className="label"></label>
            </div>
            <div className="infield">
              <FontAwesomeIcon
                icon={faEnvelope}
                fontSize={22}
                className="absolute mx-2 my-3 text-slate-500"
              />
              <Components.Input
                className="inp"
                type="email"
                placeholder="Email"
                required
              />
              <label className="label"></label>
            </div>
            <div className="infield">
              <FontAwesomeIcon
                icon={faLock}
                fontSize={22}
                className="absolute mx-2 my-3 text-slate-500"
              />
              <Components.Input
                type="password"
                placeholder="Password"
                className="inp"
                required
              />
              <label className="label"></label>
            </div>
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinin={signIn}>
          <Components.Form>
            <div className="panda">
              <div className="">
                <div className="rive-wrapper">
                  <RiveComponent className="rive-container" />
                </div>
              </div>
              <div className="infield">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  fontSize={22}
                  className="absolute mx-2 my-3 text-slate-500"
                />
                <Components.Input
                  className="inp"
                  type="email"
                  placeholder="Email"
                  required
                  value={userValue}
                  onChange={onUsernameChange}
                  ref={inputRef}
                  onFocus={onUsernameFocus}
                  onBlur={() => (isCheckingInput.value = false)}
                />
                <label className="label"></label>
              </div>
              <div className="infield">
                <FontAwesomeIcon
                  icon={faLock}
                  fontSize={22}
                  className="absolute mx-2 my-3 text-slate-500"
                />
                <Components.Input
                  type="password"
                  placeholder="Password"
                  className="inp"
                  required
                  value={passValue}
                  onChange={(e) => setPassValue(e.target.value)}
                  onFocus={() => (isHandsUpInput.value = true)}
                  onBlur={() => (isHandsUpInput.value = false)}
                />
                <label className="label"></label>
              </div>

              <Components.Anchor href="#">Forgot your password?</Components.Anchor>
              <label className="label"></label>

              <Components.Button>{LoginButtonText}</Components.Button>
            </div>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinin={signIn}>
          <Components.Overlay signinin={signIn}>
            <Components.LeftOverlayPanel signinin={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinin={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
};

export default Login;



import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faPhone, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Login() {

  return (
    <div className='ayoub'>
      <div className='containerrrrr' id='containerrrrr'>
        <div className='form-container sign-up-container'>
          <form action='#' className='formm'>
            <h1 className='h'>Create Account</h1>
            <div className='social-container'>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faMapLocationDot} />
              </a>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <span className='spa'>or use your email for registration</span>
            <div className='infield'>
              <input className='inp' type='text' placeholder='Name' />
              <label className='label'></label>
            </div>
            <div className='infield'>
            <FontAwesomeIcon icon={faEnvelope} fontSize={22} className=' absolute mx-2 my-3 text-slate-500'   />
              <input className='inp' type='email' placeholder='Email' name='email' />
              <label className='label'></label>
            </div>
            <div className='infield'>
            <FontAwesomeIcon icon={faLock} fontSize={22} className='absolute mx-2 my-3 text-slate-500'   />
              <input className='inp' type='password' placeholder='Password' />
              <label className='label'></label>
            </div>
            <button className='butto'>Sign Up</button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form action='#'>
            <h2 className='h 3xl'>Sign in</h2>
            <div className='social-container'>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faMapLocationDot} />
              </a>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <span className='spa'>or use your account</span>
            <div className='infield'>
            <FontAwesomeIcon icon={faEnvelope} fontSize={22} className=' absolute mx-2 my-3 text-slate-500'   />
              <input className='inp' type='email' placeholder='Email'  name='email' />

              <label className='label'></label>
            </div>
            <div className='infield'>
            <FontAwesomeIcon icon={faLock} fontSize={22} className='absolute mx-2 my-3 text-slate-500'   />
              <input className='inp' type='password' placeholder='Password' />
              <label className='label'></label>
            </div>
            <a href='#' className='forgot'>
              Forgot your password?
            </a>
            <button className='butto'>Sign In</button>
          </form>
        </div>
        <div className='overlay-container' id='overlayCon'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1 className='h'>Welcome Back!</h1>
              <p className='paragraphhhhhhe'>To keep connected with us please login with your personal info</p>
              <button className='butto'>Sign In</button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1 className='h'>Hello, Friend!</h1>
              <p className='paragraphhhhhhe'>Enter your personal details and start journey with us</p>
              <button className='butto'>Sign Up</button>
            </div>
          </div>
          <button className='butto' id='overlayBtn'> </button>
        </div>
      </div>

    </div>
  );
}
*/}
