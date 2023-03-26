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

function PrivacyPolicyPageComponent() {

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
                {btnStatus && <Fab onClick={() => scrollBottom()} aria-label="next" style={{ background: "#27378C", color: "#ffffff", position: "fixed", bottom: '5%', right: '5%' }}>
                    <ArrowDownwardIcon />
                </Fab>
                }
                <h2 className="font-clash-display" style={{ fontWeight: 500 }}>
                    Privacy Policy
                </h2>
                <p className="gray-text font-poppins">You must read and accept our privacy <br /> tearms to continue</p>
                <div className="privacy-policy-text font-poppins">
                    Virtual Privacy AG or any related entity (the "Company," "we," or "us") would like to inform you on how we collect, use and disclose information. This Privacy Policy describes our practices in connection with information that we collect through websites operated by us from which you are accessing this Privacy Policy (the "Websites"); which may be accessed through HTML-formatted email message(s) that we send to you that link to this Privacy Policy. Collectively, we refer to the above as the "Service." <br /><br />
                    We take the protection of your personal data very seriously. By using the Service, you agree to the collection and use of information in accordance with this policy. We collect several different types of information for various purposes to provide and improve our Service to you.
                </div>
                <div>
                    <div className="Switch-Btn-Section">
                        <FormControlLabel className="font-poppins" control={<Switch />} label="I have read and agree to the terms." />
                    </div>
                    <Button onClick={() => routeChange()} className="bottomContinueBtn font-clash-display">Continue</Button>
                </div>
            </div>
        </>
    )
}
export default PrivacyPolicyPageComponent;