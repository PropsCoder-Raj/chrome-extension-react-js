import "./style.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { goTo } from 'react-chrome-extension-router';
import SetPasswordPageComponent from "../set-password";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function FavouriteListPageComponent() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                            <span className="header-title">Favourites</span>
                        </Typography>
                        <IconButton aria-label="delete" onClick={() => handleClickOpen()}>
                            <DeleteIcon style={{ color: "#fff" }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div>
                    {
                        [1, 2, 3].map((ele) => {
                            return <>
                                <List id="transactionList" sx={{ width: '100%', bgcolor: 'transparent', borderBottom: "soild 1px gray !important", padding: "0.5rem 1rem" }}>
                                    <ListItem style={{ padding: "0" }}>
                                        <ListItemText className="font-clash-display" primary="REAL" secondary="From OxKJNJ...554SS" />
                                    </ListItem>
                                </List>
                            </>
                        })
                    }
                </div>
            </div>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure you want to clear favourites ?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        </>
    )
}
export default FavouriteListPageComponent;