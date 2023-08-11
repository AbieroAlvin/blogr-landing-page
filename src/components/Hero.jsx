const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-5 mt-8 pt-10 pb-12 md:p-6">
      <h1 className="md:text-5xl text-3xl text-center text-white font-primary">
        A modern publishing platform
      </h1>
      <h3 className="text-white text-center">
        Grow your audience and build your online brand
      </h3>
      <div className="flex gap-4 text-[14px] mt-4">
        <button className="py-2 px-4 rounded-full bg-white text-[var(--Light-red)] hover:bg-[var(--Lightred)] hover:text-white">
          Start for Free
        </button>
        <button className="py-2 px-4 border-white border-2 rounded-full text-white hover:bg-white hover:text-[var(--Lightred)]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
