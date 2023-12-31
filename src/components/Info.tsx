import { AiFillCheckCircle } from "react-icons/ai";

const Info = () => {
  return (
    <section className="mt-10" id="about">
      <div className="w-[89%] m-auto max-w-[1400px] flex flex-col lg:flex-row gap-8 xl:gap-[180px] ">
        {/* LEFT SIDE */}
        <div className="grid grid-cols-1 flex-1 gap-[30px] md:grid-cols-2 xl:gap-y-[70px]">
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-[#FFAFCC]">
              10000+
            </h1>
            <p className="mb-3 font-bold text-gray-600">Satisfied Clients</p>
            <p className=" text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam dolor nihil
            </p>
          </div>
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-[#FFAFCC]">
              86
            </h1>
            <p className="mb-3 font-bold text-gray-600">Skilled Employees</p>
            <p className=" text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam dolor nihil
            </p>
          </div>
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-[#FFAFCC]">
              500+
            </h1>
            <p className="mb-3 font-bold text-gray-600">Projects Completed</p>
            <p className=" text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam dolor nihil
            </p>
          </div>
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-[#FFAFCC]">
              10
            </h1>
            <p className="mb-3 font-bold text-gray-600">Locations Worldwide</p>
            <p className=" text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam dolor nihil
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <h1 className="text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] font-extrabold mb-[30px] lg:mb-[53px] text-[#BDE0FE] drop-shadow-sm">
            Subscribe to our newsletter and recieve special updates
          </h1>
          <div className="bg-white py-3 px-4 flex items-center justify-between border border-gray-200 rounded-[10px] mb-[49px]">
            <input className="outline-none ml-5 w-1/2" type="text" placeholder="Enter you mail .." />
            <div>
              <button className="flex items-center py-[17px] px-[26px] rounded-[8px] font-semibold text-md md:text-lg text-white bg-[#FFAFCC] duration-500 hover:bg-[#f88eb7] whitespace-nowrap flex-1 w-fit gap-5">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-[10px]">
              <div className="text-[#FFAFCC]">
                <AiFillCheckCircle size={17} />
              </div>
              <span className="text-md text-gray-500">Special Promotions</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="text-[#FFAFCC]">
                <AiFillCheckCircle size={17} />
              </div>
              <span className="text-md text-gray-500">Recieve Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
