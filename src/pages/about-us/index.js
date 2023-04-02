import "./style.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Fab from '@mui/material/Fab';
import {
    Link,
    goTo
} from 'react-chrome-extension-router';
import SetPasswordPageComponent from "../set-password";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";

function AboutUsPageComponent() {

    const [btnStatus, setBtnStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            console.log("scrollTop: ", window.pageYOffset)
            if (window.pageYOffset === 0) {
                setBtnStatus(true);
            }else{
                setBtnStatus(false);
            }
        });
    }, [])

    const backButton = () => {

    }

    const routeChange = () => {
        
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        goTo(SetPasswordPageComponent, { message: "Hi" })
    }

    const scrollBottom = () => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        setBtnStatus(false)
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
                            <span className="header-title">About Us</span>
                        </Typography>
                        <Button style={{ minWidth: "40px" }} color="inherit"> </Button>
                    </Toolbar>
                </AppBar>
                <div className="privacy-policy-text font-poppins">
                    Virtual Privacy AG or any related entity (the "Company," "we," or "us") would like to inform you on how we collect, use and disclose information. This Privacy Policy describes our practices in connection with information that we collect through websites operated by us from which you are accessing this Privacy Policy (the "Websites"); which may be accessed through HTML-formatted email message(s) that we send to you that link to this Privacy Policy. Collectively, we refer to the above as the "Service." <br /><br />
                    We take the protection of your personal data very seriously. By using the Service, you agree to the collection and use of information in accordance with this policy. We collect several different types of information for various purposes to provide and improve our Service to you.
                </div>
            </div>
        </>
    )
}
export default AboutUsPageComponent;