import "./style.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RefreshIcon from '@mui/icons-material/Refresh';
import randomWords from 'random-words';

import {
    Link,
    goTo
} from 'react-chrome-extension-router';
import PrivacyPolicyPageComponent from "../privacy-policy";
import SetPasswordPageComponent from "../set-password";

function SeedPhasePageComponent() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState(false);
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
                            <span className="header-title">Seed Phrase</span>
                        </Typography>
                        <Button style={{ minWidth: "30px" }} color="inherit"></Button>
                    </Toolbar>
                </AppBar>
                <div className="seed-phrase-section font-poppins">
                    <div>
                        Please write down your 12 Words Back-Up Seed on a paper, in the exact same order as shown below, and store the paper with the Seed in a safe place. Your 12 Words Seed and Private Key give direct access to your account and funds.Do NOT give this information to ANYONE.
                    </div>
                </div>
                <div style={{ marginTop: "2rem", padding: "10px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            {
                                publicKey.map((ele, index) => {
                                    return (
                                        <>
                                            <Grid item xs={4}>
                                                <Chip className="chip-section font-poppins" label={`${index + 1}. ${ele}`} />
                                            </Grid>
                                        </>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
                <Button className="bottomContinueBtn font-clash-display">I've written it down</Button>
            </div>
            <div>
                <Button onClick={() => generatePublicKey()} className="getNewSeedBtn font-clash-display" variant="outlined" startIcon={<RefreshIcon />}>
                    Get New Seed
                </Button>
            </div>
        </>
    )
}
export default SeedPhasePageComponent;