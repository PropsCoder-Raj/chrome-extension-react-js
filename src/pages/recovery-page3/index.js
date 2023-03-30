import "./style.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import randomWords from 'random-words';

import {
    Link,
    goTo
} from 'react-chrome-extension-router';
import SetPasswordPageComponent from "../set-password";

function RecoveryPage2Component() {
    const [publicKey, setPublicKey] = useState([]);

    useEffect(() => {
        generatePublicKey()
    }, [])

    const generatePublicKey = () => {
        setPublicKey(randomWords(12))
    }

    const backButton = () => {
        goTo(SetPasswordPageComponent, { message: "Hi" });
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
                            <span className="header-title">Recovery</span>
                        </Typography>
                        <Button style={{ minWidth: "40px" }} color="inherit"> </Button>
                    </Toolbar>
                </AppBar>
                <div className="seed-phrase-section font-poppins">
                    <div>
                        Your 12 Words Seed and Private Key give direct access to your account and funds. do not give this information to anyone. We repeat, never give your word seed and private key to anyone.
                    </div>
                </div>
                <div style={{ marginTop: "2rem", padding: "10px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <div className="recovery-public-key-section font-poppins">
                            <><Button className="recoverySectionTopBtn font-clash-display" color="inherit">Recovery Phrase</Button></>
                            <div style={{ height: "60px" }}>

                            </div>
                            <><Button className="recoverySectionBottomBtn font-clash-display" color="inherit">Paste</Button></>
                        </div>
                    </Box>
                </div>
                <div>
                    <Box sx={{ flexGrow: 1, marginTop: "5rem" }}>
                        <Grid container spacing={1}>    
                            <Grid item xs={6}>
                                <Button className="cancelBtn font-clash-display" color="inherit">Cancel</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button className="verifyBtn font-clash-display" color="inherit">Verify</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    )
}
export default RecoveryPage2Component;