import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import ProjectCardHome from "../components/project-card-home"
import HomeAbout from "../components/home-about"
import VideoSection from "../components/video-section"

import AI from "../videos/ai1.mp4"
import Blockchain from "../videos/ai2.mp4"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    <HomeAbout />
<div className="mt-24">
    <h1 className="text-center mb-8 lg:mb-0 px-4">A fully integrated suite of features</h1>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20 mx-4 lg:mx-16">
  <ProjectCardHome link='/ai' cover={AI}  title="AI" desc="AI technologies can be used to automate and optimize business processes, reduce operational costs, improve accuracy and efficiency, enhance customer experiences, and enable predictive analytics."/>
  <ProjectCardHome link='/blockchain' cover={Blockchain}  title="Blockchain" desc="Blockchain technologies can be used to enable secure and transparent transactions, reduce fraud and errors, enhance supply chain visibility and traceability, and increase trust and accountability."/>
</div>

<VideoSection title="Building on-chain has never been easier" desc="Lorem ipsum dolor sit amet consectetur. Volutpat pulvinar egestas faucibus egestas mauris urna cras justo."/>

<div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20 mx-4 lg:mx-16">
  <ProjectCardHome link='/rapid'  title="Rapid" desc="Ideal for experimental projects with lower volumes"/>
  <ProjectCardHome link='/enterprise'   title="Enterprise" desc="Ideal for strategic AI, blockchain, and IoT initiatives with high volumes"/>
</div>

</div>


  </Layout>
)

export default IndexPage
