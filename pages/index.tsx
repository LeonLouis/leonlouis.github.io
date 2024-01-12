import AboutSection from '@/components/about'
import BannerSection from '@/components/banner'
import FooterSection from '@/components/footer'
import Head from 'next/head'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Louis L.</title>
        <meta property="og:title" content="Louis L." key="title" />
        <meta property="og:description" content="Just your typical introvert & chubby web developer who doesn't have a taste for designing." />
        <meta property="og:url" content="https://louis.fatbois.life" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <BannerSection/>
      <AboutSection/>
      <FooterSection/>
    </>
  )
}

export default HomePage