import "./style.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OTPInput from "react-otp-input";


function SetPasswordPageComponent() {

    return (
        <>
            <div>
                <AppBar position="static" className="bg-transparent">
                    <Toolbar className="bg-transparent">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, background: "#232949 !important" }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography className="font-clash-display" sx={{ flexGrow: 1, margin: '0 !important' }}>
                            <span className="header-title">Enter PIN</span><br></br>
                            <span className="header-sub-title">Security Check</span>
                        </Typography>
                        <Button color="inherit"></Button>
                    </Toolbar>
                </AppBar>
                <div>
                    
                </div>
            </div>
        </>
    )
}
export default SetPasswordPageComponent;