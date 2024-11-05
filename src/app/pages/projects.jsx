import Image from "next/image";
import Link from "next/link";
import Blockchain from "../../../public/Blockchain.webp";
import Shop from "../../../public/Shop.jpg";
import Upcoming from "../../../public/upcoming.jpg";
import Coding from "../../../public/Coding.jpg";

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-around bg-white">
      
      <div className="w-full md:w-1/2 xl:w-1/3 px-4 screen-xs:px-0">
        <Link href="/professionalProjects" passHref>
          <div className="bg-white rounded-lg overflow-hidden my-10 border hover:bg-zinc-50 cursor-pointer">
            <Image
              src={Coding}
              alt="UI Design for an e-Commerce Website"
              className="w-full"
            />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <h3>
                <div
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
                  Professional Projects
                </div>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                My personal projects are a blend of academic work, explorations into new technologies, and creative endeavors I built just for fun. 
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 px-4 screen-xs:px-0">
        <Link href="/personalProjects" passHref>
          <div className="bg-white rounded-lg overflow-hidden my-10 border hover:bg-zinc-50 cursor-pointer">
            <Image src={Upcoming} alt="image" className="w-full" />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <h3>
                <div
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
                  Personal Projects
                </div>
              </h3>
              <p className="text-slate-600 leading-relaxed">  
                The projects I’ve developed during my job showcase my capacity to create solutions that streamline workflows and enhance operational effectiveness
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
