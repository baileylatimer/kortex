import React from "react"
import BackgroundVideo from "./bg-video"
import Video from "../videos/kortex-hero.mp4"
const Hero = props => (
  
<div class="hero">
<BackgroundVideo video={Video}/>
<div className="overlay-bottom"></div>
<div className="hero-text">
<h1 className="text-xxl  hero-text-1">Building</h1>
<h1 className="text-xxl  hero-text-2 ml-24">the future</h1>
</div>
<p className="hero-desc  ">Lorem ipsum dolor sit amet consectetur. Volutpat pulvinar egestas faucibus egestas mauris urna cras justo.</p>
</div>
);

export default Hero