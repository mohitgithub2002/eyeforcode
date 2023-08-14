import Image from "next/image"
export const About = () => {
    return (
        
        <div className="py-16">
        <div className="xl:container m-auto  text-gray-600 ">
          <div className="bg-purple-100  lg:p-16  space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <Image
                src="/logo3.svg"
                alt="image"
                loading="lazy"
                width={500}
                height={500}
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
                About Us
              </h2>
              <p className="my-8 text-gray-600 text-xl">
              <span>Eye For Code</span> was born from a vision to transform traditional education and showcase the true potential of emerging talents in the tech world. 
              We believe that coding is not just about creating clones or prebuilt projects, but a gateway to innovation, collaboration, and real-world impact. 
              Our community aims to bridge the gap between classNameroom knowledge and practical experience.
              <br/>
              <br/>
              With a focus on diversity, skill-sharing, and ownership, EyeFor Code is more than a community – it's a movement that empowers individuals to create, collaborate,
               and leave their mark on the digital landscape.
              </p>
      
              <a
                  href="https://tailus.io/contact"
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-blue-100 
                  before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span
                    className="relative text-base font-semibold text-blue-600"
                    >Join Community</span
                  >
              </a>
            </div>
          </div>
        </div>
      </div>
                                          
    )
}