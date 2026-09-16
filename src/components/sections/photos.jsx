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
    <section id="photography" className="px-6 md:px-12 lg:px-16 py-8 max-w-[1280px] mx-auto w-full border-t border-border">
      <div className="mb-24 flex flex-col gap-8">
        <h2 className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground font-[500]">
          PHOTOGRAPHY
        </h2>
        <div className="max-w-[550px]">
          <p className="text-[15px] text-muted-foreground font-[400] leading-[1.7]">
            Outside of software, I spend time photographing people, places, and moments around me. A small collection exploring light and form.
          </p>
        </div>
      </div>

      {/* Spacious Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-8">
        {/* Hero */}
        <div className="group relative col-span-2 row-span-2 bg-muted overflow-hidden">
          <Image
            src={images[12]}
            alt="Featured photograph"
            fill
            priority
            className="object-cover opacity-0 transition-opacity duration-1000"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Tall */}
        <div className="group relative col-span-1 row-span-2 bg-muted overflow-hidden">
          <Image
            src={images[10]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-opacity duration-1000"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Medium */}
        <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden">
          <Image
            src={images[2]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-opacity duration-1000"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Medium */}
        <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden">
          <Image
            src={images[11]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-opacity duration-1000"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Small */}
        <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden">
          <Image
            src={images[3]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-opacity duration-1000"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden">
          <Image
            src={images[5]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-opacity duration-1000"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Wide */}
        <div className="group relative col-span-2 row-span-1 bg-muted overflow-hidden">
          <Image
            src={images[4]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-opacity duration-1000"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Tall */}
        <div className="group relative col-span-1 row-span-2 bg-muted overflow-hidden">
          <Image
            src={images[1]}
            alt="Photograph"
            fill
            className="object-cover opacity-0 transition-opacity duration-1000"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>

        {/* Stacked Images */}
        <div className="col-span-1 row-span-2 grid grid-rows-2 gap-8">
          <div className="group relative bg-muted overflow-hidden">
            <Image
              src={images[13]}
              alt="Photograph"
              fill
              className="object-cover opacity-0 transition-opacity duration-1000"
              onLoad={(e) => e.currentTarget.style.opacity = 1}
            />
          </div>

          <div className="group relative bg-muted overflow-hidden">
            <Image
              src={images[0]}
              alt="Photograph"
              fill
              className="object-cover opacity-0 transition-opacity duration-1000"
              onLoad={(e) => e.currentTarget.style.opacity = 1}
            />
          </div>
        </div>

        {/* Hero Bottom */}
        <div className="group relative col-span-2 row-span-2 bg-muted overflow-hidden">
          <Image
            src={images[7]}
            alt="Featured photograph"
            fill
            priority
            className="object-cover opacity-0 transition-opacity duration-1000"
            onLoad={(e) => e.currentTarget.style.opacity = 1}
          />
        </div>
      </div>
    </section>
  );
};

export default Photographs;
