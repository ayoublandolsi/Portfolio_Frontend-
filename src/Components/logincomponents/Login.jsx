import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 850px;
max-width: 100%;
min-height: 450px;
@media (max-width: 768px) {
    margin-top:  47px;
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.25), 0 0px 10px rgba(0, 0, 0, 0.22);

}
`;

export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinin !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 `
 : null}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinin !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 40px;
height: 100%;
text-align: center;
@media (max-width: 768px) {
    padding: 0 4px;
}
`;

export const Title = styled.h1`
font-size:30px;
font-weight: bold !important;
margin: 0 !important;
@media (max-width: 768px) {
    font-size:19px;
}
`;

export const Input = styled.input`
background-color:#eee
width: 100%;
padding: 12px 15px;
justify-content: center;
align-items: center;
padding-left: 40px;
background-color: #f3f3f3;
border: none;
outline: none;
@media (max-width: 768px) {
    font-size:13px;
}
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid  #32bbb4 ;
   background-color: #32bbb4;;
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
   color: #ffffff;
   font-size: 14px;
   margin-top:10px;
   font-weight: bold;
   margin-left: 10px;
   padding: 7px 5px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;
export const GhostButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
  props.signinin !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: -webkit-linear-gradient(to right,  #32bbb4,#32bbb4);
background: linear-gradient(to right, #32bbb4, #32bbb4);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinin !== true ? `transform: translateX(50%);` : null)}
`;

 export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

 export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signinin !== true ? `transform: translateX(0);` : null}
 `;

 export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     ${props => props.signinin !== true ? `transform: translateX(20%);` : null}
 `;

export const Paragraph = styled.p`
font-size: 14px;
color:#fff;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;
{/*import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useRive, useStateMachineInput} from 'rive-react';
import {useEffect, useState} from "react";

const theme = createTheme();

const STATE_MACHINE_NAME = "State Machine 1";

export default function SignIn({checkLogin}) {

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const {rive, RiveComponent} = useRive({
        src: "2244-4437-animated-login-screen.riv",
        autoplay: true,
        stateMachines: STATE_MACHINE_NAME
    })


    useEffect(() => {
        setLook();
    }, [user])

    const stateSuccess = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'success'
    )
    const stateFail = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'fail'
    )
    const stateHandUp = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'hands_up'
    )

    const stateCheck = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'Check'
    )
    const stateLook = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'Look'
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
        if (user) {
            nbChars = parseFloat(user.split('').length);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div >
                        <RiveComponent style={{width:'400px', height:'400px'}}  src="2244-4437-animated-login-screen.riv"/>
                    </div>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <form autoComplete="off">
                        <TextField
                            onFocus={() => setHangUp(false)}

                            onChange={(event) => setUser(event.target.value)}
                            value={user}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus

                        />
                        <TextField
                            onChange={(event) =>
                            {
                                setHangUp(true);
                                setPassword(event.target.value);
                                //setHangUp(false);
                            }}
                            //onFocus={() => setHangUp(true)}
                            //onE
                            value={password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        </form>
                        <Button
                            onMouseOver={() => setHangUp(false)}
                            onFocus={() => setHangUp(false)}
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={() => {

                                setCheck(true);
                                if (checkLogin(user, password)) {
                                    triggerSuccess()
                                } else {
                                    triggerFail();
                                }
                            }}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                </Container>
                </ThemeProvider>       */}

