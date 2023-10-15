import React from "react"
import { Link } from "gatsby"

const Btn  = ({ link, type, text  }) => {
  return (
  
<div className={"btn flex justify-between items-center " + type}>
  <Link to={link}>{text}</Link>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H15M15 1V15M15 1L1 15" stroke="black" stroke-width="2"/>
</svg>

</div>
);
};

export default Btn