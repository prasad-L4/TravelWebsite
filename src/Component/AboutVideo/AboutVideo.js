import React from "react";
import VideoFile from "../../Video/About.mp4";
import"./AboutVideo.css"

function AboutVideo() {
  return (
    <div className="about-video-section">
      <video autoPlay loop muted className="about-video">
        <source src={VideoFile} type="video/mp4" />
      </video>

      <div className="about-main-headline">
        <p className="about-headline">ABOUT</p>
      </div>
    </div>
  );
}

export default AboutVideo;
