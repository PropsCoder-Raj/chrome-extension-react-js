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
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    Link,
    goTo
} from 'react-chrome-extension-router';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";

function SelectChainPageComponent() {

    const [btnStatus, setBtnStatus] = useState(true);
    const array = [
        { name: "Etherum", logo:"ETH", img: "eth", amount: 0.025, usd: 470.55, profit: 3.15, color: "lightpink"},
        { name: "Binance", logo:"BNB", img: "bnb", amount: 0.025, usd: 470.55, profit: 3.15, color: "lightgreen"},
        { name: "Bitcoin", logo:"BTC", img: "btc", amount: 0.025, usd: 470.55, profit: 3.15, color: "lightblue"},
        { name: "Avalanche", logo:"AVAX", img: "avax", amount: 0.025, usd: 470.55, profit: 3.15, color: "green"},
        { name: "Solana", logo:"SOL", img: "sol", amount: 0.025, usd: 470.55, profit: 3.15, color: "yellow"},
    ]

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

    return (
        <>
            <div>

                <AppBar position="static" className="bg-transparent">
                    <Toolbar className="bg-transparent">
                        <Typography className="font-clash-display" sx={{ flexGrow: 1, margin: '0 !important', textAlign: "initial" }}>
                            <span>Select Chain</span>
                        </Typography>
                        
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ background: "#232949 !important" }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className="mt-5 p-2">
                    <div>
                    {
                        array.map((ele) => {
                            return <>
                                <List id="coinList" sx={{ width: '100%', bgcolor: 'transparent', borderBottom: "dashed 1px gray" }}>
                                    <ListItem style={{ padding: "0" }}
                                    secondaryAction={
                                        <ListItemText id="rightSection" className="list-end-text" primary={`$ ${ele.usd}`} secondary={`+${ele.profit} %`} />
                                    }>
                                        <ListItemAvatar>
                                            <Avatar style={{ background: `radial-gradient(white, ${ele.color})`, color: "#000", borderRadius: "7px" }}>
                                                <Avatar alt="Remy Sharp" src={`./assets/coins/${ele.img}.png`} style={{ height: "30px", width: "30px" }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText id="leftSection" className="font-clash-display" primary={`${ele.name}`} secondary={`${ele.amount} ${ele.logo}`} />
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
export default SelectChainPageComponent;