import React from "react";

// import hero data
import { heroData } from "../data";

// import components
import Header from "../components/Header";

const Hero = () => {
  // destructure hero data
  const { title, subtitle, btnText, image } = heroData;

  return (
    <section className="lg:h-[800px] py-4">
      <Header />

      <div className="container mx-auto h-full relative">
        <div className="flex flex-col xl:flex-row items-center h-full md:py-10">
          {/* text */}
          <div className="text-center xl:text-left xl:absolute xl:bottom-60">
            <h1
              className="h1 xl:max-w-[700px] mb-6 xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {title}
            </h1>
            <p
              className="lead xl:max-w-[380px] mb-6 lg:mb-12"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-primary mb-8 xl:mb-0"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              {btnText}
            </button>
          </div>

          {/* image */}
          <div
            className="xl:absolute xl:-right-12 xl:bottom-17"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={image} alt="hero_image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
