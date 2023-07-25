import heroImage from "../assets/heroimage.png";

const Hero = () => {
  return (
    <section className="bg-[#BDE0FE]  w-full">
      <div className="max-w-[1400px] md:w-[92%] m-auto grid  md:grid-cols-2 grid-cols-1 gap-10 items-center">
        <div className="mt-20 md:mt-0 text-center md:text-start">
          <h2 className="text-white text-2xl font-bold drop-shadow-lg ">Welcome to</h2>
          <h1 className="text-white text-6xl font-bold drop-shadow-lg mb-3">IMAGINE MEDIA</h1>
          <p className="text-gray-400">
            Discover limitless growth possibilities through innovative social media strategies, driven by Imagine
            Media's expertise and passion for success.
          </p>
          <div className="flex gap-4 md:gap-1 lg:gap-4 mt-6 justify-center md:justify-start">
            <a
              className="duration-500 hover:bg-[#ffc8dd] bg-[#FFAFCC] py-1 px-6 rounded text-white shadow-lg drop-shadow"
              href="/"
            >
              Pricing
            </a>
            <a className="duration-500  bg-[#ffafcc] py-1 px-6 rounded text-white shadow-lg drop-shadow" href="/">
              More Info
            </a>
          </div>
        </div>

        <div className="relative w-full">
          <img src={heroImage} className="w-full h-[550px] object-cover" alt="" />
          <div className="absolute bottom-2 md:bottom-10 lg:bottom-20 left-2 md:left-5 p-4 m-3 w-44 rounded-lg shadow-md bg-white text-center">
            <span className="text-3xl font-medium mb-0 text-[#FFAFCC]">
              <span className="counter-value font-bold" data-target="125">
                125
              </span>
              +
            </span>
            <h6 className="text-sm text-slate-400 mt-1">Clients Served</h6>
          </div>
          <div className="absolute  right-0 top-5 md:top-10 lg:top-10 md:right-0 lg:right-10 p-4 w-44 rounded-lg shadow-md bg-white m-3 text-center">
            <h6 className="font-semibold text-[#FFAFCC]">Top Rated </h6>
            <h6 className="text-sm text-slate-400 mt-1">Best Service Available</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
