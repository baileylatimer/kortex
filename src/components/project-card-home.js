import React from 'react';
import { Link } from "gatsby"
import BackgroundVideo from "./bg-video"


const ProjectCardHome  = ({ title, desc, link, cover }) => {

  
  return (
    <li className=" relative"  >
      <Link to={link} className=" project-card">

        <div class="flex flex-col justify-between items-between my-4 mx-4 col-span-1 h-full">
            <h1 className="mt-8">{title}</h1>
            <p className="lg:mt-0 color-contrast-medium absolute bottom-8 p4-4 lg:pr-8"id="card-title-2">{desc}</p>

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
        </Link>
        {/* <CustomCursor /> */}
    </li>
);
};

export default ProjectCardHome