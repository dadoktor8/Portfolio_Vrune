import React, { useState, useRef, useEffect } from "react";
import "./VideoCarousel.css";

const videos = [
  "https://www.youtube.com/embed/Od2YdQ-UL6U",
  "https://www.youtube.com/embed/U72UE8tszAs",
  "https://www.youtube.com/embed/q_8MRIYIEhE",
  "https://www.youtube.com/embed/-9_zjtY_-is",
  "https://www.youtube.com/embed/Vzh5vu1uKM8",
  "https://www.youtube.com/embed/1GncHXJ6C7Q",
  "https://player.vimeo.com/video/913433494"
];

export default function VideoCarousel() {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(null);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleWheelScroll = (e) => {
    if(trackRef.current)
    {
        e.preventDefault();
        trackRef.current.ScrollLeft += e.deltaY * 2;
    }
  }
  const handleOnDown = (e) => {
    setMouseDownAt(e.clientX || e.touches[0].clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(null);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === null) return;
    
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
    if (!clientX) return;

    const mouseDelta = mouseDownAt - clientX;
    const maxDelta = window.innerWidth / 2;
    let nextPercentage = prevPercentage + (mouseDelta / maxDelta) * -100;
    nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);
    setPercentage(nextPercentage);
    
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${nextPercentage}%)`;
    }
  };

  // Use `useEffect` to track global mouse events
  useEffect(() => {
    document.addEventListener("mousemove", handleOnMove);
    document.addEventListener("mouseup", handleOnUp);
    document.addEventListener("touchmove", handleOnMove);
    document.addEventListener("touchend", handleOnUp);

    return () => {
      document.removeEventListener("mousemove", handleOnMove);
      document.removeEventListener("mouseup", handleOnUp);
      document.removeEventListener("touchmove", handleOnMove);
      document.removeEventListener("touchend", handleOnUp);
    };
  }, [mouseDownAt, prevPercentage, percentage]);

  return (
    <div id="video-track" ref={trackRef} onMouseDown={handleOnDown} onTouchStart={handleOnDown} onWheel={handleWheelScroll}>
      {videos.map((video, index) => (
        <div key={index} className="video-container">
          <iframe src={video} title={`Video ${index + 1}`} frameBorder="0" allowFullScreen></iframe>
        </div>
      ))}
    </div>
  );
}
