import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"
import ProjectCardHome from "../components/project-card-home"
import HeroVideo from "../videos/hero.mp4"
import AI from "../videos/ai3.mp4"



const ContactPage = () => (
  <Layout>
    <SEO title="Learn" />
    <h1 className="text-center  mt-48 mb-12 ">Creating smart-contracts has never been easier</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20 mx-4 lg:mx-16">
      <ProjectCardHome link='/docs' cover={AI}  title="Docs" desc="Lorem ipsum dolor sit amet consectetur. Volutpat pulvinar egestas faucibus egestas mauris urna cras justo."/>
      <ProjectCardHome link='/support' cover={AI}  title="Support" desc="Lorem ipsum dolor sit amet consectetur. Volutpat pulvinar egestas faucibus egestas mauris urna cras justo."/>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-16">
      <ProjectCardHome link='/community' cover={AI}  title="Community" desc="Lorem ipsum dolor sit amet consectetur. Volutpat pulvinar egestas faucibus egestas mauris urna cras justo."/>
      <ProjectCardHome link='/news' cover={AI}  title="News" desc="Lorem ipsum dolor sit amet consectetur. Volutpat pulvinar egestas faucibus egestas mauris urna cras justo."/>
    </div>

  </Layout>
)

export default ContactPage
