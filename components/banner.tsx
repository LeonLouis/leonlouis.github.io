import React from 'react'
import BannerImage from '../public/bannerImage.jpg'

const BannerSection = () => {
  return (
    <section style={{'backgroundImage': `url(${BannerImage.src})`}}  className="bg-cover bg-no-repeat before:bg-gradient-to-t before:from-[#242424] before:from-10% before:absolute before:w-[100%] before:h-[100vh] before:left-0 px-[20px] relative">
      <div className="h-[100vh] container mx-auto flex flex-col justify-center relative p-[20px]">
        <h1 className="text-white text-6xl font-semibold tracking-[.2em] uppercase break-words animate-fadeInDown">Louis L.</h1>
        <h2 className="uppercase text-white text-4xl font-semibold break-words animate-fadeInDown">Web Developer</h2>
        <p className="mt-[40px] text-lg text-white w-100 max-w-[620px] animate-fadeInDown">Just your regular introverted and coffee-fueled web developer with a passion for coding and a soft spot for snacks.</p>
      </div>
    </section>
  )
}

export default BannerSection