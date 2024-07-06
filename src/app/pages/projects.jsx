import Image from 'next/image'
import Link from 'next/link';
import Blockchain from "../../../public/Blockchain.webp"
import Shop from "../../../public/Shop.jpg"
import Upcoming from "../../../public/upcoming.jpg"

const Projects = () => {
    return ( 
                <div className="flex flex-wrap justify-around px-5 pt-5 lg:pt-10 bg-white">
                  <div className="w-full md:w-1/2 xl:w-1/3 px-4 min-h-max">
                      <div className="bg-white rounded-lg overflow-hidden mb-10 border hover:bg-zinc-50">
                        <Image src={Shop} alt="UI Design for an e-Commerce Website" className="w-full"/>
                        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                              <a
                                  className="
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
                              EarthlyShop UI
                              </a>
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-7">
                            EarthlyShop is a front-end design project aimed at improving creativity and showcasing web design skills. 
                            The project is built using HTML, CSS, and Bootstrap.
                            </p>
                            <a
                              href="https://sssanthoshsivan.github.io/earthlyshop.github.io/"
                              target='_blank'
                              className="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-lg
                              font-medium text-black
                              hover:bg-black hover:text-white
                              transition
                              "
                              >
                            Live Demo
                            </a>
                        </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                      <div className="bg-white rounded-lg overflow-hidden mb-10 border hover:bg-zinc-50">
                        <Image
                            src={Blockchain}
                            alt="image"
                            className="w-full"
                            />
                        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                              <a
                                  className="
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
                            <p className="text-slate-600 leading-relaxed mb-7">
                            Decentralized storage system using IPFS and blockchain for secure, scalable data storage. 
                            Data dispersed across nodes for redundancy, encrypted for authorized access.
                            </p>
                            <a
                              href="https://github.com/sssanthoshsivan/D-Storage"
                              target='_blank'
                              className="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-lg
                              text-base text-black
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
                  <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                      <div className="bg-white rounded-lg overflow-hidden mb-10 border hover:bg-zinc-50">
                        <Image
                            src={Upcoming}
                            alt="image"
                            className="w-full"
                            />
                        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                              <a
                                  className="
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
                            <p className="text-slate-600 leading-relaxed mb-7 italic">
                              "Learning never exhausts the mind"
                            </p>
                            <a
                              className="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-lg
                              text-base text-black
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
     );
}
 
export default Projects;