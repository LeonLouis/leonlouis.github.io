import React from 'react'
import { skills } from '../data/constants'

const SkillsExperienceSection = () => {
  return (
    <section className="w-full bg-[#242424] md:py-20 py-10">
      <h2 className="text-center text-white md:text-4xl text-2xl mb-[20px] font-semibold">Technologies Used</h2>
      <p className="md:text-lg text-base text-center text-white mb-10">
        Here are some of the technologies I&apos;ve used throughout my experience.
      </p>
      <div className="container px-[20px] mx-auto">
        <div className="flex flex-wrap gap-3 max-w-3xl mx-auto justify-center">
          {skills.map((skill) => (
            <div key={skill.name} className="py-2 px-4 flex items-center gap-3 border border-white rounded-lg group hover:bg-white cursor-pointer">
              <img src={skill.img} alt={`${skill.name} logo`} className="w-5"/>
              <p className="text-white group-hover:text-black">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsExperienceSection