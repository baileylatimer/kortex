import React from "react"
import BackgroundVideo from "./bg-video"
import Video from "../videos/kortex-hero.mp4"
import Btn from './btn'
const Hero = props => (
  
<div class="hero">
<BackgroundVideo video={Video}/>
<div className="overlay-bottom"></div>
<div className="hero-text">
<h1 className="text-xxl  hero-text-1">Building</h1>
<h1 className="text-xxl  hero-text-2 ml-24">the future</h1>
</div>
<Btn text="Talk to sales" type="hero-btn"/>
<div className="hero-desc">
<div className="hero-desc-box p-8">
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
<p className="font-secondary">Lorem ipsum dolor sit amet consectetur. Volutpat pulvinar egestas faucibus egestas mauris urna cras justo.</p>
</div>
<div className="hero-desc-details flex justify-between mt-8">
  <p className="font-secondary">An offbeat experiment</p>
  <p className="font-secondary">Project name: Kortex Labs<br />Load Address: 034526-01<br />IScxx compressed</p>
</div>
</div>
</div>

);

export default Hero