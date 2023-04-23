import "./style.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import DirectionsIcon from '@mui/icons-material/Directions';
import {
    Link,
    goTo
} from 'react-chrome-extension-router';
import HistoryIcon from '@mui/icons-material/History';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Tab3BrowserPageComponent() {

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
                        <span className="my-wallet-header-title">Browser</span>
                    </Typography>
                </div>
                <div>
                    <Box id="browserSection">
                        <div className="font-clash-display" style={{ textAlign: "initial", marginBottom: "10px", marginTop: "20px" }}>Explorer the Crypto World</div>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Enter the URL"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                    
                    <Box sx={{ marginTop: "20px", padding: "20px" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: "100%" }} style={{ background: "#192255", borderRadius: "15px" }}>
                                        <CardContent>
                                            <IconButton style={{ background: "#fce35f" }}>
                                                <HistoryIcon style={{ color: "#192255" }} />
                                            </IconButton>
                                            <div className="font-clash-display" style={{ color: "white", marginTop: "15px" }}>History</div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: "100%" }} style={{ background: "#192255", borderRadius: "15px" }}>
                                        <CardContent>
                                            <IconButton style={{ background: "#fce35f" }}>
                                                <StarIcon style={{ color: "#192255" }} />
                                            </IconButton>
                                            <div className="font-clash-display" style={{ color: "white", marginTop: "15px" }}>Favorite</div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                </div>
            </div>
        </>
    )
}
export default Tab3BrowserPageComponent;