import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Santhosh Sivan</h1>
          <p className="text-xl text-gray-600">Engineer • Artist • Athlete</p>
          <Button size="lg">Explore My Work</Button>
        </div>
        <div>
          <img src="/Profile.webp" alt="Santhosh Sivan" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;