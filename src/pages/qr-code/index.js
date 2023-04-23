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
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { goTo } from 'react-chrome-extension-router';
import { toast } from "react-hot-toast";
import QRCode from 'react-qr-code';

function QrCodeComponent() {
    const [walletAddress, setWalletAddress] = useState("0x01aF89212Ea60C9aa9a71D881F15555687f35070");
    const [publicKey, setPublicKey] = useState([]);

    useEffect(() => {
    }, [])

    const copyText = () => {
        const text = publicKey.join(' ')
        navigator.clipboard.writeText(walletAddress);
        toast.success("Wallet Address Copied")
    }
    

    return (
        <>
            <div>
                <AppBar position="static" className="bg-transparent">
                    <Toolbar className="bg-transparent">
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, background: "#232949 !important" }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography className="font-clash-display" sx={{ flexGrow: 1, margin: '0 !important' }}>
                            <span className="header-title">Receive</span>
                        </Typography>
                        <Button style={{ minWidth: "40px" }} color="inherit"> </Button>
                    </Toolbar>
                </AppBar>
                <div style={{ padding: "5px", background: "white", width: "65%", margin: "auto", marginTop: "60px" }}>
                    <QRCode value={walletAddress} style={{ width: "100%" }} />
                </div>
                <div>
                    <Box sx={{ flexGrow: 1, marginTop: "5rem" }}>
                        <Grid container spacing={1}>    
                            <Grid item xs={12}>
                                <Button onClick={() => copyText()} className="continueBtn font-clash-display" color="inherit" endIcon={<ContentCopyIcon />}>{`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    )
}
export default QrCodeComponent;