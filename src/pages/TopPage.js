import React from 'react'
import TopSlider from '../components/TopSlider'
import "../css/top.css"
import { Scroll } from "../components/ScrollAnimation";
import topEdit from "../edits/TopPage.json";

const TopPage = () => {
    return (
        <div className='TopField'>
            <div className="Slider">
                <TopSlider />
                <div className="Message">
                    <Scroll>
                        <h1>{topEdit.rightText.headline}</h1>
                        {topEdit.rightText.lines.map(text=> <p key={text}>{text}</p>)}
                    </Scroll>
                </div>
            </div>
        </div>
    )
}

export default TopPage
