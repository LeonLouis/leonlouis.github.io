import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="lg:h-[100vh] h-[100%] px-[20px]">
      <div className="container mx-auto bg-white md:py-20 py-10">
        <div className="flex items-center gap-x-10 justify-center flex-col-reverse xl:flex-row">
          <Image
            src="/aboutImage.png"
            className="px-[20px] pb-[20px]"
            width={677}
            height={785}
            alt="Developer Image"
          />
          <div className="p-[20px]">
            <h2 className="md:text-[40px] text-[24px] mb-[20px] font-semibold">About</h2>
            <p className="mb-[20px] md:text-lg text-base">Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentumcum sociis natoque penatibus et magnis xdis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus.</p>
            <p className="mb-[20px] md:text-lg text-base">Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection