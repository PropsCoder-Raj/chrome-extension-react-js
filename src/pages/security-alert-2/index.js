import "./style.css";
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

function SecurityAlert2PageComponent() {

    const [btnStatus, setBtnStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            console.log("scrollTop: ", window.pageYOffset)
            if (window.pageYOffset == 0) {
                setBtnStatus(true);
            }else{
                setBtnStatus(false);
            }
        });
    }, [])

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
                <div style={{ marginTop: "5rem" }}>
                    <img className="animate__animated animate__jackInTheBox" src="../../assets/warning.png" style={{ height: "10rem" }} />
                </div>
                <h2 className="font-clash-display" style={{ fontWeight: 500 }}>
                    We will never ask for your seed
                </h2>
                <div className="privacy-policy-text font-poppins">
                No one on the Pocket team request the user's seed or private key. Whether through support, promotion, giveaway, website, telegram bot or any other type of contact.
                </div>
                <div>
                    <Button onClick={() => routeChange()} className="bottomContinueBtn-2 font-clash-display">Okay, I got it!</Button>
                </div>
            </div>
        </>
    )
}
export default SecurityAlert2PageComponent;