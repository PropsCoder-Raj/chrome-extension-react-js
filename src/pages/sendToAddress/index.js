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

function SendToAddressComponent() {
    const [publicKey, setPublicKey] = useState([]);
    const [amount, setAmount] = useState(0);
    const array = [
        { amount: 50, color: "lightblue" },
        { amount: 150, color: "lightgreen" },
        { amount: 250, color: "lightpink" },
        { amount: 350, color: "lightgray" }
    ]

    useEffect(() => {
    }, [])

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
                            <span className="header-title">Send</span>
                        </Typography>
                        <Button style={{ minWidth: "40px" }} color="inherit"> </Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Typography className="font-clash-display" sx={{ flexGrow: 1, marginTop: "2rem" }}>
                        <div className="my-wallet-header-title" style={{ fontWeight: "medium" }}>$100</div>
                        <div className="my-wallet-header-sub-title" style={{ fontWeight: "medium" }}>0.01BNB</div>
                    </Typography>
                </div>
                <div style={{ padding: "7px" }}>
                    <Box sx={{ flexGrow: 1 }} id="toAddressSection">
                        <div className="recovery-public-key-section font-poppins">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">To :</span>
                                <input type="text" class="form-control" placeholder="Wallet Address" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <><Button className="recoverySectionBottomBtn font-clash-display" color="inherit">Paste</Button></>
                        </div>
                    </Box>
                </div>
                <div style={{ padding: "7px" }}>
                    <Box sx={{ flexGrow: 1 }} id="enterAmountSection">
                        <div className="font-poppins subtitle">Please enter amount in USD</div>
                        <div className="recovery-public-key-section font-poppins">
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1">$</span>
                                <input type="number" class="form-control" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                            </div>
                        </div>
                    </Box>
                </div>
                <div className="row p-2 mt-5">
                        {
                            array.map((item) => {
                                return(
                                    <>
                                        <div className="col-3">
                                            <button onClick={() => setAmount(item.amount)} className="btn w-100 font-poppins" style={{ background: `radial-gradient(white, ${item.color})`, borderRadius: "15px", fontSize: "large", fontWeight: "bold" }}>
                                            $ {item.amount} 
                                            </button>
                                        </div>
                                    </>
                                )
                            })
                        }
                </div>
                <div className="centerBottonDiv">
                    <Box sx={{ flexGrow: 1, marginTop: "5rem" }}>
                        <Grid container spacing={1}>    
                            <Grid item xs={12}>
                                <Button className="continueBtn font-clash-display" color="inherit">Send</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    )
}
export default SendToAddressComponent;