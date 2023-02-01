import React from 'react'
import "../css/otherheader.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BurgerMenu from './BurgerMenu';
import topEdit from "../edits/TopPage.json";
import { Link } from 'react-router-dom';


const OtherHeader = () => {
    return (
        <div className='OtherHeaderField'>
            <div className="OtherBurger">
                <BurgerMenu width={250} />
            </div>
            <div className="OtherLogo">
                {topEdit.topTitle}
            </div>
            <div className="OtherMenuField">
                <div className="OtherMenu">
                    <Link to="/morguchifoods"><o><HomeOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.home}</o></Link>
                </div>
                <div className="OtherMenu">
                    <Link to="/morguchifoods/information"><o><InfoOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.information}</o></Link>
                </div>
                <div className="OtherMenu">
                    <o><DescriptionOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.workContent}</o>
                </div>
                <div className="OtherMenu">
                    <o><EmailOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.contact}</o>
                </div>
            </div>
        </div>
    )
}

export default OtherHeader
