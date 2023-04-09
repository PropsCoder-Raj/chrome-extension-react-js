import "./style.css";
import Fab from '@mui/material/Fab';
import EastIcon from '@mui/icons-material/East';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useEffect, useState } from 'react';

import { goTo } from 'react-chrome-extension-router';
import PrivacyPolicyPageComponent from "../privacy-policy";
import Tab1HomePageComponent from "./tab1-home";
import Tab4SettingPageComponent from "./tab4-setting";

function TabsMainModuleComponent() {

    const [tabsList, setTabsList] = useState([
        { img: "wallet-active" },
        { img: "transaction" },
        { img: "planet-earth" },
        { img: "hexagon" },
    ])
    const [value, setValue] = useState(0);

    // useEffect(() => {
    //     handleChange("", 0);
    // }, [])

    const handleChange = (event, newValue) => {
        console.log("newValue: ", newValue);

        tabsList.map((item, index) => {
            let str = item.img.toString();;
            if(newValue == index){
                item.img = str+"-active";
            }else{
                if(str.search("-active") > 1){
                    item.img = str.replace("-active", "")
                }
            }
        })
        setValue(newValue);
    };

    const routeChange = () => {
        goTo(PrivacyPolicyPageComponent, { message: "Hi" })
    }

    return (
        <>
            <div>
                { value == 0 && <><Tab1HomePageComponent /></> }
                { value == 3 && <><Tab4SettingPageComponent /></> }

                <div id='mainTabs'>
                    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" style={{ width: "100% !important", margin: "0 !important" }}>
                        <Tab icon={<Avatar variant="square" src={`/assets/${tabsList[0].img}.png`} />} style={{ width: "25%" }} />
                        <Tab icon={<Avatar variant="square" src={`/assets/${tabsList[1].img}.png`} />} style={{ width: "25%" }} />
                        <Tab icon={<Avatar variant="square" src={`/assets/${tabsList[2].img}.png`} />} style={{ width: "25%" }} />
                        <Tab icon={<Avatar variant="square" src={`/assets/${tabsList[3].img}.png`} />} style={{ width: "25%" }} />
                    </Tabs>
                </div>
            </div>
        </>
    )
}
export default TabsMainModuleComponent;