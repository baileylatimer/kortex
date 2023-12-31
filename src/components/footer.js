import React from "react"
import Stripes from './stripes';
import Logo from './logo';

const PageHeader = props => (
  
  <footer className=" flex flex-col pt-20 lg:pt-40 relative">
    <div className=" flex justify-between mx-d">
      <p>© 2024 / Kortex Labs</p>
      <div className="flex footer-links">
        <a href="https://www.instagram.com/kortexlabs.ai/">Instagram</a>
        <a className="ml-4" href="/contact">Contact</a>
      </div>
    </div>

    <Stripes/>
    <Logo/>

</footer>
);

export default PageHeader