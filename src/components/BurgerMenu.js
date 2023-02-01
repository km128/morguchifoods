import React from "react";
import { stack as Menu } from "react-burger-menu";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../css/burger.css"
import topEdit from "../edits/TopPage.json";
import { Link } from "react-router-dom";

const props = ({ width }) => {



    return (
        <Menu {...width} right>
            <div className="MenuField">
                <div className="Menu">
                    <Link to="./"><m><HomeOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.home}</m></Link>
                </div>
                <div className="Menu">
                    <Link to="/information"><m><InfoOutlinedIcon style={{ fontSize: "22px", marginTop: "3px", marginRight: "5px" }} />{topEdit.menu.information}</m></Link>
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
        </Menu>
    );
};

export default props;
