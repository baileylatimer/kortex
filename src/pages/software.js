import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"
import TextCard from "../components/text-card"
import ContactBanner from "../components/contact-banner"

import HeroVideo from "../videos/hero.mp4"

const AboutPage = () => (
  <Layout>
    <SEO title="Software" />

    <h1 className="text-center  mt-48 mb-12 ">Creating smart-contracts has never been easier</h1>
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
    <StaticImage placeholder="blurred" src="../images/test-img.jpg" alt="Rocio Colomer Jorda • Dance" objectFit="cover" height="1200" width="2000" />
    <div className="flex flex-col">
    <StaticImage placeholder="blurred" src="../images/test-img.jpg" alt="Rocio Colomer Jorda • Dance" objectFit="cover" height="1200" width="2000" />
    <StaticImage placeholder="blurred" src="../images/test-img.jpg" alt="Rocio Colomer Jorda • Dance" objectFit="cover" height="1200" width="2000" />
    </div>
    </div>
    <div className="flex flex-col lg:flex-row">
      <TextCard text="Lorem ipsum dolor sit amet consectetur. Volutpat pulvinar egestas faucibus egestas mauris urna cras justo."/>
      <TextCard text="Lorem ipsum dolor sit amet consectetur. Volutpat pulvinar egestas faucibus egestas mauris urna cras justo."/>
    </div>
  </Layout>
)

export default AboutPage
