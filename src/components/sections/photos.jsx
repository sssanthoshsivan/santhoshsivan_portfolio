import Image from "next/image";

const images = [
  "/img1.webp",
  "/img3.webp",
  "/img4.webp",
  "/img5.webp",
  "/img8.webp",
  "/img9.webp",
  "/img12.webp",
  "/img13.webp",
  "/img15.webp",
  "/img16.webp",
  "/img17.webp",
  "/img18.webp",
  "/travel.webp",
  "/img19.webp",
  "/img20.webp",
];

const Photographs = () => {
  return (
    <section id="photography" className="px-6 md:px-12 lg:px-16 py-12 md:py-16 max-w-[1280px] mx-auto w-full">
      <div className="mb-8 md:mb-12 flex flex-col gap-3 md:gap-4">
        <h2 className="text-[12px] uppercase tracking-[0.1em] text-foreground font-[500]">
          PHOTOGRAPHY
        </h2>
        <div className="max-w-[380px] md:max-w-[420px]">
          <p className="text-[14px] md:text-[15px] text-muted-foreground font-[400] leading-[1.7]">
            Outside of software, I spend time photographing people, places, and moments around me. A small collection exploring light and form.
          </p>
        </div>
      </div>

      {/* Spacious Grid */}
      <div className="group/gallery grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-2.5 md:gap-3">
        {/* Hero */}
        <div className="group relative col-span-2 row-span-2 bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
          <Image
            src={images[12]}
            alt="Featured photograph"
            fill
            priority
            className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Tall */}
        <div className="group relative col-span-1 row-span-2 bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
          <Image
            src={images[10]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Medium */}
        <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
          <Image
            src={images[2]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Medium */}
        <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
          <Image
            src={images[11]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Small */}
        <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
          <Image
            src={images[3]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
          <Image
            src={images[5]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Wide */}
        <div className="group relative col-span-2 row-span-1 bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
          <Image
            src={images[4]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Tall */}
        <div className="group relative col-span-1 row-span-2 bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
          <Image
            src={images[1]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Stacked Images */}
        <div className="col-span-1 row-span-2 grid grid-rows-2 gap-8">
          <div className="group relative bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
            <Image
              src={images[13]}
              alt="Photograph"
              fill
              className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
              onLoad={(e) => e.currentTarget.style.opacity = 1}
            />
          </div>

          <div className="group relative bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
            <Image
              src={images[0]}
              alt="Photograph"
              fill
              className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
              onLoad={(e) => e.currentTarget.style.opacity = 1}
            />
          </div>
        </div>

        {/* Hero Bottom */}
        <div className="group relative col-span-2 row-span-2 bg-muted overflow-hidden transition-opacity duration-[400ms] group-hover/gallery:opacity-[0.85] hover:!opacity-100">
          <Image
            src={images[7]}
            alt="Featured photograph"
            fill
            priority
            className="object-cover opacity-0 transition-[transform,opacity] duration-1000 group-hover:duration-[400ms] ease-out group-hover:scale-[1.02]"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>
      </div>
    </section>
  );
};

export default Photographs;
