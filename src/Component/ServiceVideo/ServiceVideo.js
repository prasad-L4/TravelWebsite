import React from 'react'
import"./ServiceVideo.css"
import VideoFile from "../../Video/services.mp4";
import RecentTrips from '../RecentTrips/RecentTrips';

function ServiceVideo() {
  return (
       <div>
          <div className="service-video-section">
      <video autoPlay loop muted className="service-video">
        <source src={VideoFile} type="video/mp4" />
      </video>

      <div className="service-main-headline">
        <p className="service-headline">SERVICE</p>
      </div>
      </div>

      

    <RecentTrips/>
    </div>
   
  )
}

export default ServiceVideo