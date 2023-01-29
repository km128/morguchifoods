import React from 'react'
import "../css/header.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import BurgerMenu from './BurgerMenu';

const Header = () => {
    return (
        <div className='HeaderField'>
            <div className="Burger">
                <BurgerMenu width={250}/>
            </div>
            <div className="Logo">
                有限会社モリグチフーズ
            </div>
            <div className="MenuField">
                <div className="Menu">
                    <m><HomeOutlinedIcon style={{fontSize:"22px", marginTop:"3px",marginRight:"5px"}}/>ホーム</m> 
                </div>
                <div className="Menu">
                    <m><InfoOutlinedIcon style={{fontSize:"22px", marginTop:"3px",marginRight:"5px"}}/>会社案内</m>
                </div>
                <div className="Menu">
                    <m><DescriptionOutlinedIcon style={{fontSize:"22px", marginTop:"3px",marginRight:"5px"}}/>業務内容</m>
                </div>
                <div className="Menu">
                    <m><EmailOutlinedIcon style={{fontSize:"22px", marginTop:"3px",marginRight:"5px"}}/>お問い合わせ</m>
                </div>
            </div>
            <div className="ButtomField">
                <div className="Link">
                    <a href='https://ja-jp.facebook.com/people/%E6%9C%89%E9%99%90%E4%BC%9A%E7%A4%BE%E3%83%A2%E3%83%AA%E3%82%B0%E3%83%81%E3%83%95%E3%83%BC%E3%82%BA/100063622140446/'>
                    <FacebookIcon style={{fontSize:"22px",color:"blue"}}/>
                    </a>
                </div>
                <div className="CopyRight">
                copyright @ MoriguchiFoods all rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Header
