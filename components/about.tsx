import React from 'react'
import Image from 'next/image'
import AboutImage from '../public/aboutImage.png'
import { useInView } from 'react-intersection-observer'

const AboutSection = () => {
  const { ref, inView } = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="h-[100%] px-[20px] overflow-hidden">
      <div className="container mx-auto bg-white md:py-20 py-10">
        <div className="flex items-center gap-x-10 justify-center flex-col-reverse xl:flex-row">
          <Image
            src={AboutImage}
            className={`px-[20px] pb-[20px] ${inView ? "animate-fadeInUp" : ""}`}
            alt="Developer Image"
          />
          <div className={`p-[20px] ${inView ? "animate-fadeInRight" : ""}`}>
            <h2 className="md:text-4xl text-2xl mb-[20px] font-semibold">About</h2>
            <p className="mb-[20px] md:text-lg text-base">Howdy! I&apos;m your go-to introverted web developer, immersed in WordPress for four years now. My world revolves around crafting masterpiece websites, and my coding skills are my trusty companions.</p>
            <p className="mb-[20px] md:text-lg text-base">When I&apos;m not in the internet world, I&apos;m satisfying my dual passions: exploring different cuisines and traveling around the world. Join me in this adventure where code meets foodie delights and travel escapades.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection