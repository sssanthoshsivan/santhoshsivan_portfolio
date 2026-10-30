import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-6 md:px-12 lg:px-16 py-8 lg:py-12 bg-background max-w-[1280px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-border pt-8 text-[12px] uppercase tracking-[0.06em] text-foreground font-normal">
        
        <div className="flex flex-col gap-2">
          <span className="font-medium text-foreground">Santhosh Sivan</span>
          <span className="text-muted-foreground">Full Stack Engineer · Theni, India</span>
          <span className="mt-8 text-muted-foreground/80">© {new Date().getFullYear()} · Engineered for high throughput</span>
        </div>

        <div className="flex flex-col gap-2.5">
          <Link target="_blank" href="https://github.com/sssanthoshsivan" className="animated-underline text-foreground/80 hover:text-foreground">GitHub ↗</Link>
          <Link target="_blank" href="https://www.linkedin.com/in/sssanthoshsivan/" className="animated-underline text-foreground/80 hover:text-foreground">LinkedIn ↗</Link>
          <Link href="/favourites" className="animated-underline text-foreground/80 hover:text-foreground">Favourites (Archive) ↗</Link>
          <Link href="mailto:santhoshsivansenthilkumar@gmail.com" className="animated-underline text-foreground/80 hover:text-foreground">Email ↗</Link>
        </div>

        <button 
          onClick={scrollToTop} 
          className="group inline-flex items-center gap-1.5 text-left text-muted-foreground hover:text-foreground transition-colors py-1"
          aria-label="Scroll back to top of page"
        >
          <span>Back to top</span>
          <span className="transition-transform duration-200 group-hover:-translate-y-1">↑</span>
        </button>

      </div>
    </footer>
  );
}

export default Footer;
