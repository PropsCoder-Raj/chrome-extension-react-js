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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { goTo } from 'react-chrome-extension-router';
import SetPasswordPageComponent from "../set-password";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function ImportTokenPageComponent() {
    const [tokenAddress, setTokenAddress] = useState([]);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const backButton = () => {
        goTo(SetPasswordPageComponent, { message: "Hi" });
    }

    const pasteText = () => {
        setTokenAddress((document.execCommand('paste')).toString())
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
                            <span className="header-title">Import Token</span>
                        </Typography>
                        <Button style={{ minWidth: "40px" }} color="inherit"> </Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" id="importTokenTabs">
                        <Tab label="ERC20" {...a11yProps(0)} />
                        <Tab label="BEP20" {...a11yProps(1)} />
                    </Tabs>
                </div>
                <div style={{ marginTop: "2rem", padding: "10px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <div className="recovery-public-key-section font-poppins">
                            <><Button className="recoverySectionTopBtn font-clash-display" color="inherit">Token Address</Button></>
                            <textarea className="font-poppins" placeholder="Enter token address" style={{ background: "transparent", border: "unset", outline: "unset", color: "white", width: "100%", fontSize: "large", minHeight: "100px" }} value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} />
                            <><Button className="recoverySectionBottomBtn font-clash-display" color="inherit" onClick={() => pasteText()}>Paste</Button></>
                        </div>
                    </Box>
                </div>
                <div className="centerBottonDiv">
                    <Box sx={{ flexGrow: 1, marginTop: "5rem" }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Button className="verifyBtn font-clash-display" color="inherit">Import</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    )
}
export default ImportTokenPageComponent;