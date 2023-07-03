import { AiOutlineLogin } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { SiYourtraveldottv } from 'react-icons/si';
import { TiThMenu } from 'react-icons/ti';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const slideNav = () => {
    setNav(!nav);
  };

  return (
    <header className="flex w-full justify-between items-center h-20 px-10 font-semibold absolute z-10 text-white">
      <div className="flex items-center gap-1">
        <SiYourtraveldottv size={50} className=" hover:animate-bounce" />
        <h1>TRAVEL.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Destination</li>
        <li>Tour</li>
        <li>Packages</li>
        <li>Contacts</li>
      </ul>
      <div id="login" className="hidden md:flex">
        <AiOutlineLogin size={30} />
      </div>

      {/* Menu */}

      <div onClick={slideNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose size={30} className="text-black" />
        ) : (
          <TiThMenu size={30} />
        )}
      </div>

      {/* // Mobile // */}

      <div
        className={
          nav
            ? 'absolute left-0 top-0 w-full bg-gray-300 rounded-sm px-4 py-8 flex flex-col  duration-500 md:hidden'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <li>Destination</li>
          <li>Tour</li>
          <li>Packages</li>
          <li>Contacts</li>
          <div className="flex flex-col gap-2">
            <button className="mobile-btn">Login</button>
            <button className="mobile-btn">Account</button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
