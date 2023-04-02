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

import { goTo } from 'react-chrome-extension-router';
import SeedPhasePageComponent from "../seed-phase";
import RecoveryPage2Component from "../recovery-page2";
import { toast } from "react-hot-toast";

function RecoveryPage1Component() {
    const [publicKey, setPublicKey] = useState([]);

    useEffect(() => {
        generatePublicKey()
    }, [])

    const generatePublicKey = () => {
        setPublicKey(randomWords(12))
    }

    const copyText = () => {
        const text = publicKey.join(' ')
        navigator.clipboard.writeText(text);
        toast.success("Key Copied")
    }

    const backButton = () => {
        goTo(SeedPhasePageComponent, { message: "Hi" });
    }

    const nextPage = () => {
        goTo(RecoveryPage2Component, { message: "Hi" });
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
                            <div>
                                {
                                    publicKey.map((ele, index) => {
                                        return (
                                            <>
                                                <span>{ele} </span>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <><Button className="recoverySectionBottomBtn font-clash-display" onClick={() => copyText()} color="inherit">Copy</Button></>
                        </div>
                    </Box>
                </div>
                <div className="centerBottonDiv">
                    <Box sx={{ flexGrow: 1, marginTop: "5rem" }}>
                        <Grid container spacing={1}>    
                            <Grid item xs={12}>
                                <Button onClick={() => nextPage()} className="continueBtn font-clash-display" color="inherit">Continue</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    )
}
export default RecoveryPage1Component;