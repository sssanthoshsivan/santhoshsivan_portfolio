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
  "/travel.jpg",
  "/img19.jpg",
  "/img20.jpg",
];

const Photographs = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-28">
      <div>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
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
              src={images[12]}
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
              src={images[10]}
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

          {/* Medium */}
          <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            <Image
              src={images[11]}
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
              src={images[5]}
              alt="Photograph"
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Wide */}
          <div className="group relative col-span-2 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            <Image
              src={images[4]}
              alt="Photograph"
              fill
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
          {/* Stacked Images */}
          <div className="col-span-1 row-span-2 grid grid-rows-2 gap-6">
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
              <Image
                src={images[13]}
                alt="Photograph"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>

            <div className="group relative rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
              <Image
                src={images[0]}
                alt="Photograph"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="group relative col-span-2 row-span-2 rounded-3xl overflow-hidden bg-neutral-100 shadow-sm">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            <Image
              src={images[7]}
              alt="Featured photograph"
              fill
              priority
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photographs;
