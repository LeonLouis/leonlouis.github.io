import React from 'react'
import Image from 'next/image'
import { projects } from '../data/constants'
import { useInView } from 'react-intersection-observer'


const ProjectsSection = () => {
  const { ref, inView } = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="container mx-auto bg-white md:py-20 py-10">
      <div className="mx-auto px-[20px]">
        <div className="mx-auto text-center">
          <h2 className="md:text-4xl text-2xl mb-[20px] font-semibold">Recent Projects</h2>
          <p className="md:text-lg text-base">
            Here are some of the projects I&apos;ve created.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="mx-auto flex max-w-xl flex-col items-start">
              <a className="w-full" href={project.href} target="_blank">
                <Image
                  src={project.image}
                  width={475}
                  height={350}
                  className={`w-full mb-5 object-cover rounded-xl ${inView ? "animate-fadeIn" : ""}`}
                  alt={project.title}
                />
              </a>
              <div className={`flex items-center flex-wrap gap-4 text-xs ${inView ? "animate-fadeInLeft" : ""}`}>
                {project.category.map((cat) => (
                  <p key={`${project.id}-${cat}`} className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-200">
                    {cat}
                  </p>
                ))}
              </div>
              <div className={`relative ${inView ? "animate-fadeInDown" : ""}`}>
                <h3 className="mt-5 md:text-lg text-base font-semibold leading-6 text-gray-900 hover:text-gray-600">
                  <a href={project.href} target="_blank">
                    {project.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection