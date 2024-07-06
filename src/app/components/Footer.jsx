import Link from "next/link";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialSpotify,
  SlSocialGithub,
} from "react-icons/sl";

const Footer = () => {
    return ( 
        <div>
            <footer>
                <div className="mt-16 flex flex-col items-center text-black dark:text-black">
                    <div className="mb-3 flex space-x-4">
                    <Link target="_blank" href="https://github.com/sssanthoshsivan">
                        <SlSocialGithub kind="github" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.instagram.com/sssanthosh_sivan/"
                    >
                        <SlSocialInstagram kind="instagram" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.youtube.com/channel/UCb3BUO7Y78L8kwj59b9L_EQ"
                    >
                        <SlSocialYoutube kind="youtube" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://open.spotify.com/user/31sc2cwyyfou3apb5xjgeuugostq"
                    >
                        <SlSocialSpotify kind="spotify" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/sssanthoshsivan/"
                    >
                        <SlSocialLinkedin kind="twitter" />
                    </Link>
                    </div>
                    <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div></div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Santhosh Sivan
                    </div>
                    <div>&bull;</div>
                    <div>{`© 2023`}</div>
                    <div>&bull;</div>
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;

