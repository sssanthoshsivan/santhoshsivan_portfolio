import Image from 'next/image'
import Link from 'next/link';
import Blockchain from "../public/Blockchain.webp"
import Shop from "../public/Shop.jpg"
import Upcoming from "../public/upcoming.jpg"

const Projects = () => {
    return ( 
        <section class=" pt-5 lg:pt-10 pb-10 lg:pb-20 bg-white">
            <div class="container justify-center">
                <div class="flex flex-wrap -mx-4">
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                      <div class="bg-white rounded-lg overflow-hidden mb-10">
                        <Image src={Shop} alt="UI Design for an e-Commerce Website" class="w-full"/>
                        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                              <a
                                  href="javascript:void(0)"
                                  class="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-xl
                                  lg:text-[22px]
                                  xl:text-xl
                                  2xl:text-[22px]
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                                  >
                              UI Design for an e-Commerece Website
                              </a>
                            </h3>
                            <p class="text-slate-600 leading-relaxed mb-7">
                            EarthlyShop is a front-end design project aimed at improving creativity and showcasing web design skills. 
                            The project is built using HTML, CSS, and Bootstrap.
                            </p>
                            <a
                              href="https://sssanthoshsivan.github.io/earthlyshop.github.io/"
                              target='_blank'
                              class="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-xl
                              font-medium
                              hover:bg-black hover:text-white
                              transition
                              "
                              >
                            Live Demo
                            </a>
                        </div>
                      </div>
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                      <div class="bg-white rounded-lg overflow-hidden mb-10">
                        <Image
                            src={Blockchain}
                            alt="image"
                            class="w-full"
                            />
                        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                              <a
                                  href="javascript:void(0)"
                                  class="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-xl
                                  lg:text-[22px]
                                  xl:text-xl
                                  2xl:text-[22px]
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                                  >
                              D' Storage
                              </a>
                            </h3>
                            <p class="text-slate-600 leading-relaxed mb-7">
                            Blockchain-based decentralized storage using IPFS and blockchain technology to provide secure and scalable data storage, 
                            with data distributed across multiple nodes for redundancy and protected by encryption for authorized access.
                            </p>
                            <a
                              href="https://github.com/sssanthoshsivan/D-Storage"
                              target='_blank'
                              class="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-xl
                              text-base text-body-color
                              font-medium
                              hover:bg-black hover:text-white
                              transition
                              "
                              >
                            View Details
                            </a>
                        </div>
                      </div>
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                      <div class="bg-white rounded-lg overflow-hidden mb-10">
                        <Image
                            src={Upcoming}
                            alt="image"
                            class="w-full"
                            />
                        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                              <a
                                  href="javascript:void(0)"
                                  class="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-xl
                                  lg:text-[22px]
                                  xl:text-xl
                                  2xl:text-[22px]
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                                  >
                              Upcoming Project
                              </a>
                            </h3>
                            <p class="text-slate-600 leading-relaxed mb-7">
                              Working on Some New Stuffs on the Market.
                            </p>
                            <a
                              href="javascript:void(0)"
                              class="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-xl
                              text-base text-body-color
                              font-medium
                              hover:bg-black hover:text-white
                              transition
                              "
                              >
                            Soon....
                            </a>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>
     );
}
 
export default Projects;