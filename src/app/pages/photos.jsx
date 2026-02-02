import Image from "next/image";

const images = [
  "/img1.jpeg", // hero
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img12.jpeg",
  "/img13.jpg",
  "/img15.jpg",
  "/img16.jpeg",
  "/img17.jpg",
  "/img18.jpg",
];

const Photographs = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-28">
      <div  >
        <div className="mb-16">
          <h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-4">
            Visual Explorations
          </h2>
          <p className="text-neutral-600 max-w-xl leading-relaxed">
            A small collection of photographs exploring light, form, and
            everyday moments — an extension of how I observe and compose.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[190px] gap-6">
          {/* Hero */}
          <div className="group relative col-span-2 row-span-2 rounded-3xl overflow-hidden bg-neutral-100 shadow-sm">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            <Image
              src={images[0]}
              alt="Featured photograph"
              fill
              priority
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Tall */}
          <div className="group relative col-span-1 row-span-2 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            <Image
              src={images[1]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Medium */}
          <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            <Image
              src={images[2]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Small */}
          <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            <Image
              src={images[3]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            <Image
              src={images[4]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Wide */}
          <div className="group relative col-span-2 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            <Image
              src={images[5]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Remaining */}
          {images.slice(6, 10).map((src, idx) => (
            <div
              key={idx}
              className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm"
            >
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
              <Image
                src={src}
                alt={`Photograph ${idx + 7}`}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photographs;
