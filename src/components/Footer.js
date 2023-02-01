import React from 'react'
import "../css/footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import topEdit from "../edits/TopPage.json";

const Footer = () => {
    return (
        <div className='FooterField'>
            <div className="Link">
                <a href={topEdit.facebookURL}>
                    <FacebookIcon style={{ fontSize: "22px", color: "blue" }} />
                </a>
            </div>
            <div className="CopyRight">
                {topEdit.copyright}
            </div>
        </div>
    )
}

export default Footer
