import React from 'react'

const BannerSection = () => {
  return (
    <section className="bg-[url('/bannerImage.jpg')] before:bg-gradient-to-t before:from-[#242424] before:from-10% before:absolute before:w-[100%] before:h-[100vh] before:left-0 px-[20px] relative">
      <div className="h-[100vh] container mx-auto flex flex-col justify-center relative p-[20px]">
        <h1 className="text-white md:text-[100px] text-[60px] font-semibold tracking-[.2em] uppercase md:leading-[100px] leading-[60px] break-words">Louis L.</h1>
        <h2 className="uppercase text-white md:text-[65px] text-[45px] font-semibold break-words">Web Developer</h2>
        <p className="mt-[40px] md:text-[24px] text-[18px] text-white w-100 max-w-[620px]">Just your typical introvert & chubby web developer who doesn't have a taste for designing.</p>
      </div>
    </section>
  )
}

export default BannerSection