import "./style.css";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { goTo } from 'react-chrome-extension-router';
import SetPasswordPageComponent from "../set-password";
import { Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function WalletPageComponent() {

   const backButton = () => {
      // goTo(SetPasswordPageComponent, { message: "Hi" });
   }

   return (
      <>
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
                  <span className="header-title">Wallet</span>
               </Typography>
               <Button style={{ minWidth: "40px" }} color="inherit"> </Button>
            </Toolbar>
         </AppBar>
         <Box id="supportPageList">
            <List sx={{ width: '100%', bgcolor: '#192255', borderRadius: "50px"}}>
               <ListItem
                  secondaryAction={
                     <IconButton
                        onClick={() => backButton()}
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
                  <ListItemText className="font-clash-display" primary="Backup Wallet" />
               </ListItem>
            </List>
            <List sx={{ width: '100%', bgcolor: '#192255', borderRadius: "50px"}}>
               <ListItem
                  secondaryAction={
                     <IconButton
                        onClick={() => backButton()}
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
                     <Avatar style={{background: "radial-gradient(#fff, lightgreen)"}}>
                        <RocketLaunchIcon />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText className="font-clash-display" primary="Reset Wallet" />
               </ListItem>
            </List>
         </Box>
      </>
   )
}
export default WalletPageComponent;