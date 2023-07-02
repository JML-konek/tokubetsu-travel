import { FaSearchLocation } from 'react-icons/fa';

import background from '/assets/ilocos-1.mp4';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={background}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>

      {/* OVERLAY */}
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>

      {/* Content */}

      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center p-4 font-poppins font-bold">
        <h1 className="content">Welcome to Lorem, ipsum dolor.</h1>
        <h2 className="content">The North is Waiting</h2>
        <form
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-full text-black
         bg-green-200/90"
        >
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-poppins focus:outline-none ml-2"
              type="text"
              placeholder="Search Destination        "
            />
          </div>
          <div>
            <button className=" text-blue-600">
              <FaSearchLocation size={30} className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
