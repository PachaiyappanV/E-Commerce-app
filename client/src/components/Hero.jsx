import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row border border-gray-400 mt-4">
      {/*Hero left side */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-10 md:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl md:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/*Hero right side */}
      <img src={assets.hero_img} className="w-full md:w-1/2" alt="hero-image" />
    </div>
  );
};

export default Hero;
