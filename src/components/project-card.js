import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundVideo from "./bg-video"
import VideoModal from './video-modal';
import CustomCursor from "./cursor";

const ProjectCard  = ({ title, desc, cover, video, videoTitle, tag  }) => {
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
    <li className={tag + " relative"}  >

      <Link className=" project-card">

        <div class="flex justify-between my-4 mx-4">
            <h1 class="">{title}</h1>
            <h1 className="lg:mt-0 color-contrast-medium"id="card-title-2">{desc}</h1>
        </div>
        </Link>

    </li>
);
};

export default ProjectCard