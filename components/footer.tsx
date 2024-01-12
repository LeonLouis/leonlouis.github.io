import React from 'react'

const FooterSection = () => {
  return (
    <footer className="bg-[#242424] text-white p-[20px]">
      <div className="container mx-auto flex justify-between align-center">
        <p>© 2024 Louis L. All rights reserved.</p>
        <div className="flex flex-row gap-5">
          <a href="https://github.com/LeonLouis" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/leon-lalisan/" target="_blank">LinkedIn</a>
          <a href="https://join.skype.com/invite/vsHXVHnrGFGx" target="_blank">Skype</a>
          <a href="mailto:leon.lalisan@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection