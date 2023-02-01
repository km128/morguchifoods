import React from 'react'
import InfoEdit from "../edits/Information.json"
import "../css/information.css"
import Footer from '../components/Footer'
const Information = () => {
  return (
    <div className='InfoField'>
      <div className="Title">
        会社案内
      </div>
      <div className="GreetField">
        <div className="Title">{InfoEdit.greetTitle}</div>
        <div className="GreetContent">
          {InfoEdit.greets.map(text => <p key={text}>{text}</p>)}
          <div className="Representative">
            代表取締役 <h2>{InfoEdit.representativeName}</h2>
          </div>
        </div>
      </div>
      <div className="Overview">
        <div className="Title">{InfoEdit.overview}</div>
        <div className="Box">
          <div className="Left">
            商号
          </div>
          <div className="Right">
            {InfoEdit.companyName}
          </div>
        </div>
        <div className="Box">
          <div className="Left">
            代表取締役
          </div>
          <div className="Right">
            {InfoEdit.representativeName}
          </div>
        </div>
        <div className="Box">
          <div className="Left">
            設立
          </div>
          <div className="Right">
            {InfoEdit.established}

          </div>
        </div>
        <div className="Box">
          <div className="Left">
            資本金
          </div>
          <div className="Right">
            {InfoEdit.capitalStock}

          </div>
        </div>
        <div className="Box">
          <div className="Left">
            業務内容
          </div>
          <div className="Right">
            {InfoEdit.workContent}

          </div>
        </div>
      </div>
      <div className="History">
        <div className="Title">{InfoEdit.historyName}</div>
        {
          InfoEdit.history.map(data =>
            <div className="Box" key={data.date}>
              <div className="Left">
                {data.date}
              </div>
              <div className="Right">
                {data.content}
              </div>
            </div>
          )
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Information
