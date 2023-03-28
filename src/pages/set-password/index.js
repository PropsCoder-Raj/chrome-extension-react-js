import "./style.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from "react";
import toast from 'react-hot-toast';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
    Link,
    goTo
  } from 'react-chrome-extension-router';
import PrivacyPolicyPageComponent from "../privacy-policy";
import SeedPhasePageComponent from "../seed-phase";

function SetPasswordPageComponent() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [status, setStatus] = useState(false)

    const handleChangePassword = (newValue) => {
        setPassword(newValue)
    }

    const handleChangeConfirmPassword = (newValue) => {
        setConfirmPassword(newValue)
        if(newValue.length == 6){
            setStatus(true)
        }
    }

    const continuePassword = () => {
        if(password.length == 6){
            setStatus(true)
        }else{
            toast.error("Enter 6 digit password")
        }
    }

    const continueConfirmPassword = () => {
        if(confirmPassword.length < 6){
            toast.error("Enter 6 digit password")
        }else if(confirmPassword != password){
            toast.error("Confirm password & Password must be equal.");
        }else{
            setStatus(true)
            goTo(SeedPhasePageComponent, { message: "Hi" });
        }
    }
    
    const backButton = () => {
        if(!status){
            goTo(PrivacyPolicyPageComponent, { message: "Hi" });
        }else if(status){
            setStatus(false);
        }
    }

    return (
        <>
            <div>
                <AppBar position="static" className="bg-transparent">
                    <Toolbar className="bg-transparent">
                        <IconButton
                            onClick={() => backButton()}
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, background: "#232949 !important" }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography className="font-clash-display" sx={{ flexGrow: 1, margin: '0 !important' }}>
                            <span className="header-title">{!status ? "Enter PIN" : "Re-Enter PIN"}</span><br></br>
                            <span className="header-sub-title">Security Check</span>
                        </Typography>
                        <Button style={{ minWidth: "30px" }} color="inherit"></Button>
                    </Toolbar>
                </AppBar>
                <div className="centerDiv">
                    {
                        !status ? 
                        <>
                            <MuiOtpInput id="passwordSet" value={password} onChange={(e) => handleChangePassword(e)} length={6} />
                            <Button onClick={() => continuePassword()} endIcon={<NavigateNextIcon />}>
                                Continue
                            </Button>
                        </> :
                        <>
                            <MuiOtpInput id="passwordSet" value={confirmPassword} onChange={(e) => handleChangeConfirmPassword(e)} length={6} />
                            <Button onClick={() => continueConfirmPassword()} endIcon={<NavigateNextIcon />}>
                                Continue
                            </Button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default SetPasswordPageComponent;