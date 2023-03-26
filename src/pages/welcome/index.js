import "./style.css";
import Fab from '@mui/material/Fab';
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";

function WelcomePageComponent() {
    return (
        <>
            <div>
                <h2>
                    Welcome to the safest <br /> Crypto Wallet
                </h2>
                <div className="centerDiv">
                    <img className="animate__animated animate__bounceInDown" src="../../assets/Image.png" />
                </div>
                <div className="centerBottonDiv">
                    <Link to="/privacy-policy">
                    <Fab aria-label="next" style={{ background: "#27378C", color: "#ffffff" }}>
                        <EastIcon />
                    </Fab>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default WelcomePageComponent;