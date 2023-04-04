import "./style.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthIcon from '@mui/icons-material/South';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CachedIcon from '@mui/icons-material/Cached';
import {
    Link,
    goTo
} from 'react-chrome-extension-router';
import SetPasswordPageComponent from "../set-password";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";

function HomePageComponent() {

    const [btnStatus, setBtnStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            console.log("scrollTop: ", window.pageYOffset)
            if (window.pageYOffset === 0) {
                setBtnStatus(true);
            } else {
                setBtnStatus(false);
            }
        });
    }, [])

    const backButton = () => {

    }

    const routeChange = () => {

        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        goTo(SetPasswordPageComponent, { message: "Hi" })
    }

    const scrollBottom = () => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        setBtnStatus(false)
    }

    return (
        <>
            <div>

                <AppBar position="static" className="bg-transparent">
                    <Toolbar className="bg-transparent">
                        {/* <IconButton
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
                            <span className="header-title">About Us</span>
                        </Typography>
                        <Button style={{ minWidth: "40px" }} color="inherit"> </Button> */}
                    </Toolbar>
                </AppBar>
                <div>
                    <Typography className="font-clash-display" sx={{ flexGrow: 1, margin: '0 !important' }}>
                        <span className="my-wallet-header-title">My Wallet</span>
                    </Typography>
                    <Typography className="font-clash-display" sx={{ flexGrow: 1, marginTop: "2rem" }}>
                        <div>Wallet Binance</div>
                        <div className="my-wallet-header-title">$100</div>
                    </Typography>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <Grid container spacing={5}>
                        <Grid item xs>
                        </Grid>
                        <Grid item xs={4}>
                            <IconButton className="action-btn" aria-label="delete">
                                <NorthEastIcon className="action-btn-icon" />
                            </IconButton>
                            <div className="font-clash-display" style={{ marginTop: "1rem" }}>Send</div>
                        </Grid>
                        <Grid item xs={4}>
                            <IconButton className="action-btn" aria-label="delete">
                                <SouthIcon className="action-btn-icon" />
                            </IconButton>
                            <div className="font-clash-display" style={{ marginTop: "1rem" }}>Receive</div>
                        </Grid>
                        <Grid item xs>
                        </Grid>
                    </Grid>
                </div>
                <div className="transactions-list-section">
                    <div className="font-poppins">Transaction

                        <IconButton aria-label="delete">
                            <CachedIcon style={{ color: "#a4a8bc" }} />
                        </IconButton>
                    </div>
                    <div>
                    {
                        [1,2,3].map((ele) => {
                            return <>
                                <List id="transactionList" sx={{ width: '100%', bgcolor: 'transparent', borderBottom: "dashed 1px gray" }}>
                                    <ListItem style={{ padding: "0" }}
                                    secondaryAction={
                                        <ListItemText className="list-end-text" primary="0.055 BNB" secondary="1666 USD" />
                                    }>
                                        <ListItemAvatar>
                                        <Avatar style={{ background: "#c8d7fc", color: "#000" }}>
                                            <SouthIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText className="font-clash-display" primary="Receive" secondary="From OxKJNJ...554SS" />
                                    </ListItem>
                                </List>
                            </>
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePageComponent;