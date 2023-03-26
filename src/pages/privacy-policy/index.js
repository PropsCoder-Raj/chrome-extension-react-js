import "./style.css";
import Fab from '@mui/material/Fab';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';

function PrivacyPolicyPageComponent() {
    return (
        <>
            <div>
                <h2>
                    Privacy Policy
                </h2>
                <p className="gray-text">You must read and accept our privacy <br /> tearms to continue</p>
                <div className="privacy-policy-text">
                    Virtual Privacy AG or any related entity (the "Company," "we," or "us") would like to inform you on how we collect, use and disclose information. This Privacy Policy describes our practices in connection with information that we collect through websites operated by us from which you are accessing this Privacy Policy (the "Websites"); which may be accessed through HTML-formatted email message(s) that we send to you that link to this Privacy Policy. Collectively, we refer to the above as the "Service." <br />
                    We take the protection of your personal data very seriously. By using the Service, you agree to the collection and use of information in accordance with this policy. We collect several different types of information for various purposes to provide and improve our Service to you.
                </div>
                <div className="centerBottonDiv">
                    <Button className="bottomContinueBtn">Continue</Button>
                </div>
            </div>
        </>
    )
}
export default PrivacyPolicyPageComponent;