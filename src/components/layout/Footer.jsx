import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-6 md:px-12 lg:px-16 py-8 lg:py-12 bg-background max-w-[1280px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-border pt-8 text-[12px] uppercase tracking-[0.06em] text-foreground font-normal">
        
        <div className="flex flex-col gap-2">
          <span>SANthosh Sivan</span>
          <span className="text-muted-foreground">Full Stack Engineer</span>
          <span className="mt-8">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex flex-col gap-2">
          <Link target="_blank" href="https://github.com/sssanthoshsivan" className="text-link">GitHub</Link>
          <Link target="_blank" href="https://www.linkedin.com/in/sssanthoshsivan/" className="text-link">LinkedIn</Link>
          <Link href="mailto:santhoshkan205@gmail.com" className="text-link">Email</Link>
        </div>

        <button onClick={scrollToTop} className="text-link text-left">
          Back to top ↑
        </button>

      </div>
    </footer>
  );
}

export default Footer;
