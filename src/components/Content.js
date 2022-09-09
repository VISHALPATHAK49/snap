import React from 'react'
import Button from '@mui/material/Button'
import img1 from '../images/client-audiophile.svg'
import img2 from '../images/client-databiz.svg'
import img3 from '../images/client-maker.svg'
import img4 from '../images/client-meet.svg'
import hero from '../images/image-hero-desktop.png'
function Content() {
  return (
    <div className="content">
        <div className="left-content">
            <h1>Make<br /> <span>remote</span>  work</h1>
            <div className="left-text">
            Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.
            </div>
        <Button variant="contained" className="btn">Learn More</Button>
        <div className="client-images">
          <div className="client">
            <img src={img1} alt="" />
          </div>
          <div className="client">
            <img src={img2} alt="" />
          </div>
          <div className="client">
            <img src={img3} alt="" />
          </div>
          <div className="client">
            <img src={img4} alt="" />
            </div>
        </div>
        </div>
        <div className="right-content">
            <img src={hero} alt=""  className="hero"/>
        </div>
    </div>
  )
}

export default Content