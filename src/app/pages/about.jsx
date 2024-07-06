import Link from "next/link";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialSpotify,
  SlSocialGithub,
} from "react-icons/sl";

const About = () => {
    return ( 
        <div>
                <h2 className="mb-8 text-3xl pt-16 text-center md:text-5xl font-bold tracking-tighter leading-tight text-black dark:text-black">
                About
                </h2>
            <div>
                <p className=" text-black text-justify pb-10 leading-loose text-lg">
                Greetings! I&apos;m a passionate coder. My coding adventure kicked
                off with Python, where I tackled small projects, and soon I found
                myself drawn into the world of web development through frameworks
                like Flask and Django along with HTML, CSS, and JavaScript. Soon I
                built my very first webpage using plain HTML and Bootstrap, a
                modest achievement, and I even ventured into blockchain projects,
                with a primary focus on Web 3.0 for my academics. Countless hours
                of self-guided learning prepared me for the transition to React.
                This shift opened doors to dynamic website possibilities, and I
                further refined my skills using tools like Next.js and Tailwind
                CSS, enhancing my ability to craft seamless user experiences. My
                current focus centres predominantly on front-end web development.
                I relish the process of transforming concepts into captivating and
                interactive digital spaces. Feel free to connect, <span className=" text-orange-500 font-semibold">Thank you</span>.
                </p>
            </div>
        </div>
     );
}
 
export default About;

