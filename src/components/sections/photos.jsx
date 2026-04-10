import Image from "next/image";

const images = [
  "/img1.webp", // hero
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
    <section className="px-6 md:px-16 lg:px-24 py-28 border-b border-border">
      <div>
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground mb-4 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-border"></span>
            Visual Archive // Photography
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Observing the details.
          </h3>
          <p className="text-muted-foreground max-w-xl leading-relaxed font-mono">
            A small collection of photographs exploring light, form, and
            everyday moments — an extension of how I observe and compose.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[190px] gap-4">
          {/* Hero */}
          <div className="group relative col-span-2 row-span-2 bg-muted overflow-hidden border border-border">
            <Image
              src={images[12]}
              alt="Featured photograph"
              fill
              priority
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>

          {/* Tall */}
          <div className="group relative col-span-1 row-span-2 bg-muted overflow-hidden border border-border">
            <Image
              src={images[10]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>

          {/* Medium */}
          <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden border border-border">
            <Image
              src={images[2]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>

          {/* Medium */}
          <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden border border-border">
            <Image
              src={images[11]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>

          {/* Small */}
          <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden border border-border">
            <Image
              src={images[3]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>

          <div className="group relative col-span-1 row-span-1 bg-muted overflow-hidden border border-border">
            <Image
              src={images[5]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>

          {/* Wide */}
          <div className="group relative col-span-2 row-span-1 bg-muted overflow-hidden border border-border">
            <Image
              src={images[4]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>
          {/* Tall */}
          <div className="group relative col-span-1 row-span-2 bg-muted overflow-hidden border border-border">
            <Image
              src={images[1]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>
          {/* Stacked Images */}
          <div className="col-span-1 row-span-2 grid grid-rows-2 gap-4">
            <div className="group relative bg-muted overflow-hidden border border-border">
              <Image
                src={images[13]}
                alt="Photograph"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>

            <div className="group relative bg-muted overflow-hidden border border-border">
              <Image
                src={images[0]}
                alt="Photograph"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
          </div>

          <div className="group relative col-span-2 row-span-2 bg-muted overflow-hidden border border-border">
            <Image
              src={images[7]}
              alt="Featured photograph"
              fill
              priority
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photographs;
