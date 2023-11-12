import React from 'react';
import { Link } from "gatsby"
import BackgroundVideo from "./bg-video"


const ProjectCardHome  = ({ title, desc, link, cover }) => {

  
  return (
    <li className=" relative"  >
      <Link to={link} className=" project-card">

        <div class="flex flex-col justify-between items-between my-4 mx-4 col-span-1 h-full">
            <h1 className="mt-8">{title}</h1>
            <p className="lg:mt-0 color-contrast-medium absolute bottom-8"id="card-title-2">{desc}</p>
        </div>
        </Link>
        {/* <CustomCursor /> */}
    </li>
);
};

export default ProjectCardHome