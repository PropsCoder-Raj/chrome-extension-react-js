import "./style.css";
import Fab from '@mui/material/Fab';
import EastIcon from '@mui/icons-material/East';

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
                    <Fab aria-label="next" style={{ background: "#27378C", color: "#ffffff" }}>
                        <EastIcon />
                    </Fab>
                </div>
            </div>
        </>
    )
}
export default WelcomePageComponent;