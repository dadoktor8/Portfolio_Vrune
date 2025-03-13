import React from "react";
import './VideoGrid.css';

const videos = [
    "https://www.youtube.com/embed/Od2YdQ-UL6U",
    "https://www.youtube.com/embed/U72UE8tszAs",
    "https://www.youtube.com/embed/q_8MRIYIEhE",
    "https://www.youtube.com/embed/-9_zjtY_-is"
  ];
  
export default function VideoGrid() {
    return(
        <div className="video-grid">
            {videos.map((video, index) => (
                <div key={index} className="video-container">
                <iframe src={video} title={'Video ${index + 1}'} frameBorder="0" allowFullScreen></iframe>
                </div>
            ))}
        </div>
    );
}