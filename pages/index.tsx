import AboutSection from '@/components/about'
import BannerSection from '@/components/banner'
import FooterSection from '@/components/footer'
import ProjectsSection from '@/components/projects'
import SkillsExperienceSection from '@/components/skills-exp'
import Head from 'next/head'
import React from 'react'
import BannerImage from '../public/bannerImage.jpg'
import Favicon from '../public/favicon.png'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Louis L. - Web Developer</title>
        <meta property="og:image" content={`${BannerImage.src}`}/>
        <meta property="og:image:alt" content="Portfolio Website. Louis L." />
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="600"/>
        <meta property="og:title" content="Louis L. - Web Developer" key="title" />
        <meta property="og:description" content="Just your regular introverted and coffee-fueled web developer with a passion for coding and a soft spot for snacks." />
        <meta property="og:url" content="https://louis.fatbois.life" />
        <meta name="twitter:image:src" content={`${BannerImage.src}`}/>
        <meta name="twitter:site" content="@github" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Louis L. - Web Developer" />
        <meta name="twitter:description" content="Just your regular introverted and coffee-fueled web developer with a passion for coding and a soft spot for snacks." />
        <link rel="icon" type="image/x-icon" href={`${Favicon.src}`}></link>
      </Head>
      <BannerSection/>
      <AboutSection/>
      <SkillsExperienceSection/>
      <ProjectsSection/>
      <FooterSection/>
    </>
  )
}

export default HomePage