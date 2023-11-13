import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundVideo from "./bg-video"
import VideoModal from './video-modal';
import CustomCursor from "./cursor";

const VideoSection  = ({ title, desc, cover, video, videoTitle, tag  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  


  const openModal = (url) => {
    setIsOpen(true);
    setVideoUrl(url);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl('');
  };

  
  return (
    <div className={tag + " relative flex flex-col mt-24"}  >

<h1 class="text-center mb-8">{title}</h1>
<div className='video-section relative mx-4 lg:mx-16'>



<svg className="corner-1"width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.41406" y="0.646447" width="5.32843" height="5.32843" transform="rotate(45 4.41406 0.646447)" fill="white" stroke="black" stroke-width="0.5"/>
            </svg>
            <svg className="corner-2"width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.41406" y="0.646447" width="5.32843" height="5.32843" transform="rotate(45 4.41406 0.646447)" fill="white" stroke="black" stroke-width="0.5"/>
            </svg>
            <svg className="corner-3"width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.41406" y="0.646447" width="5.32843" height="5.32843" transform="rotate(45 4.41406 0.646447)" fill="white" stroke="black" stroke-width="0.5"/>
            </svg>
            <svg className="corner-4"width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.41406" y="0.646447" width="5.32843" height="5.32843" transform="rotate(45 4.41406 0.646447)" fill="white" stroke="black" stroke-width="0.5"/>
            </svg>


</div>
 <p className="color-contrast-medium text-center mt-8">{desc}</p>
 
    </div>
);
};

export default VideoSection