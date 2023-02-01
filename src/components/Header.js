import React from 'react'
import "../css/header.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import BurgerMenu from './BurgerMenu';
import topEdit from "../edits/TopPage.json";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='HeaderField'>
            <div className="Burger">
                <BurgerMenu width={250} />
            </div>
            <div className="Logo">
                {topEdit.topTitle}
            </div>
            <div className="MenuField">
                <div className="Menu">
                    <Link to="/morguchifoods/"><m><HomeOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.home}</m></Link>
                </div>
                <div className="Menu">
                    <Link to="/morguchifoods/information"><m><InfoOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.information}</m></Link>
                </div>
                <div className="Menu">
                    <m><DescriptionOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.workContent}</m>
                </div>
                <div className="Menu">
                    <m><EmailOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.contact}</m>
                </div>
            </div>
            <div className="ButtomField">
                <div className="Link">
                    <a href={topEdit.facebookURL}>
                        <FacebookIcon style={{ fontSize: "22px", color: "blue" }} />
                    </a>
                </div>
                <div className="CopyRight">
                    {topEdit.copyright}
                </div>
            </div>
        </div>
    )
}

export default Header
