import "./style.css"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import { Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

function HistoryPageComponent() {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
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
                        <span className="header-title">History</span>
                    </Typography>
                    <Button style={{ minWidth: "40px" }} color="inherit"> </Button>
                </Toolbar>
            </AppBar>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs id="historyTab" value={value} onChange={handleChange} centered>
                        <Tab label="Swap" value="1" />
                        <Tab label="Buy" value="2" />
                    </Tabs>
                </Box>
                <TabPanel value="1">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <List id="historySwapList" sx={{ width: '100%', bgcolor: 'transparent', borderBottom: "dashed 1px gray" }}>
                            <ListItem style={{ padding: "0" }}
                                secondaryAction={
                                    <ListItemText className="list-end-text" primary="BNB" secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                0xfrgtrgfbdf
                                            </Typography><br></br>
                                            {" 0.00165150 BNB"}
                                        </React.Fragment>
                                    } />
                                }>
                                <ListItemText id="subHistorySwapList" className="font-clash-display" primary="ETH" secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            0xfrgtrgfbdf
                                        </Typography><br></br>
                                        {" 0.1 ETH"}
                                    </React.Fragment>
                                } />
                                <Box id="subHistorySwapIconButton">
                                    <IconButton size="large">
                                        <SwapHorizIcon fontSize="inherit" style={{ color: "#fff" }} />
                                    </IconButton><br></br>
                                    <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            10 August, 2023
                                        </Typography><br></br>{"1:30PM"}
                                </Box>
                            </ListItem>
                        </List>
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <List id="historyBuyList" sx={{ width: '100%', bgcolor: 'transparent', borderBottom: "dashed 1px gray" }}>
                            <ListItem style={{ padding: "0" }}
                                secondaryAction={
                                    <ListItemText className="list-end-text" primary="August 10, 2023" secondary="7:16 PM" />
                                }>
                                <ListItemText id="subHistoryBuyList" className="font-clash-display" primary="ETH" secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            0xfrgtrgfbdf
                                        </Typography><br></br>
                                        {" 0.00165150 ETH"}
                                    </React.Fragment>
                                } />
                            </ListItem>
                        </List>
                    </Box>
                </TabPanel>
            </TabContext>
        </>
    )
}
export default HistoryPageComponent;