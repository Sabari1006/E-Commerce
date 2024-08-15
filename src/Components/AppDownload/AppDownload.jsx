import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br />Durais super market</p>
        <div className="app-download-platform">
            <img src={assets.play} alt="" />
            <img src={assets.app} alt="" />
        </div>
    </div>
  )
}

export default AppDownload