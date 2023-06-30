import { FaHeadset } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="max-w-[1440px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      {/* Left */}

      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            eos minima amet earum similique. Unde doloribus error magnam tempora
            nemo saepe eius, recusandae tempore! Illo, voluptatem? Reprehenderit
            nesciunt hic omnis laborum nihil molestias odio eveniet aspernatur
            iure perspiciatis consequatur nemo harum recusandae, ut est illo
            delectus velit atque consectetur voluptatum.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className=" bg-green-400 p-1 rounded-md">
              <FaHeadset size={50} />
            </button>
            <div className="px-2">
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className=" bg-green-400 p-1 rounded-md">
              <FaHeadset size={50} />
            </button>
            <div className="px-2">
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}

      <div>
        <div className="border text-center">
          <p className="pt-2">Get an Additional 10% Off</p>
          <p className="py-3">23 Hours Left</p>
          <p className=" bg-green-900 text-white py-2">Book Now</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination:</label>
            <select className="border rounded-md p-2">
              <option value="">Select Destination</option>
              <option value="">Kaaringan Falls</option>
              <option value="">Kapurpurawan rock formation</option>
              <option value="">Paoy Church</option>
              <option value="">Patapat viaduct</option>
              <option value="">Pagudpud</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Check-in:</label>
            <input
              type="date"
              name=""
              id=""
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Check-out:</label>
            <input
              type="date"
              name=""
              id=""
              className="border rounded-md p-2"
            />
          </div>
          <button className="w-full my-4 p-2 bg-green-400">Rates</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
