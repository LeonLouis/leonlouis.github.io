import AboutSection from '@/components/about'
import BannerSection from '@/components/banner'
import FooterSection from '@/components/footer'
import ProjectsSection from '@/components/projects'
import Head from 'next/head'
import React from 'react'
import BannerImage from '../public/bannerImage.jpg'
import Favicon from '../public/favicon.png'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Louis L.</title>
        <meta property="og:image" content={`${BannerImage.src}`}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:title" content="Louis L. | Web Developer" key="title" />
        <meta property="og:description" content="Just your regular introverted and coffee-fueled web developer with a passion for coding and a soft spot for snacks." />
        <meta property="og:url" content="https://louis.fatbois.life" />
        <link rel="icon" type="image/x-icon" href={`${Favicon.src}`}></link>
      </Head>
      <BannerSection/>
      <AboutSection/>
      <ProjectsSection/>
      <FooterSection/>
    </>
  )
}

export default HomePage