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
        <footer className="px-6 md:px-16 lg:px-24 py-16 bg-background">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border pt-12">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-4">
                    <span>© {new Date().getFullYear()} SANTHOSH SIVAN</span>
                    <span className="w-8 h-[1px] bg-border"></span>
                    <span>சந்தோஷ் சிவன்</span>
                </div>

                <div className="flex items-center gap-6">
                    <Link target="_blank" href="https://github.com/sssanthoshsivan" className="text-foreground hover:text-muted-foreground transition-colors">
                        <SlSocialGithub size={20} />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/sssanthosh_sivan/" className="text-foreground hover:text-muted-foreground transition-colors">
                        <SlSocialInstagram size={20} />
                    </Link>
                    <Link target="_blank" href="https://open.spotify.com/user/31sc2cwyyfou3apb5xjgeuugostq" className="text-foreground hover:text-muted-foreground transition-colors">
                        <SlSocialSpotify size={20} />
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/sssanthoshsivan/" className="text-foreground hover:text-muted-foreground transition-colors">
                        <SlSocialLinkedin size={20} />
                    </Link>
                </div>

                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
                    [ SYSTEM_STATUS: OPERATIONAL ]
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;

