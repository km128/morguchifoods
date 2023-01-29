import React from 'react'
import TopSlider from './TopSlider'
import "../css/top.css"
import { Scroll } from "./ScrollAnimation";
const TopPage = () => {
    return (
        <div className='TopField'>
            <div className="Slider">
                <TopSlider />
                <div className="Message">
                    <Scroll>
                        <h1>「技術・衛生・安全・共栄」</h1>
                        <p>この精神を養い、知性と理性を高め</p>
                        <p>21世紀の食肉文化を創造する企業をモットーにしております。</p>
                    </Scroll>
                </div>
            </div>
        </div>
    )
}

export default TopPage
