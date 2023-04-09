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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CachedIcon from '@mui/icons-material/Cached';
import {
    Link,
    goTo
} from 'react-chrome-extension-router';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

function Tab4SettingPageComponent() {

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
                        <span className="my-wallet-header-title">Setting</span>
                    </Typography>
                </div>
                <div className="transactions-list-section">
                    <Box id="settingPageList">
                        <List sx={{ width: '100%', bgcolor: '#192255', borderRadius: "50px" }}>
                            <ListItem
                                secondaryAction={
                                    <IconButton
                                        size="small"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ background: "#0d1541 !important" }}
                                    >
                                        <ArrowForwardIcon />
                                    </IconButton>
                                }>
                                <ListItemAvatar>
                                    <Avatar id='icon1'>
                                        <FolderOpenIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className="font-clash-display" primary="Wallet" />
                            </ListItem>
                        </List>
                        <List sx={{ width: '100%', bgcolor: '#192255', borderRadius: "50px" }}>
                            <ListItem
                                secondaryAction={
                                    <IconButton
                                        size="small"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ background: "#0d1541 !important" }}
                                    >
                                        <ArrowForwardIcon />
                                    </IconButton>
                                }>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "radial-gradient(#fff, lightgreen)" }}>
                                        <SupportAgentIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className="font-clash-display" primary="Support" />
                            </ListItem>
                        </List>
                    </Box>
                </div>
            </div>
        </>
    )
}
export default Tab4SettingPageComponent;