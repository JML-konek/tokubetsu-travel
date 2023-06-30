import norte1 from '/assets/norte-6.jpg';
import norte2 from '/assets/norte-5.jpg';
import norte3 from '/assets/norte-2.jpg';
import norte4 from '/assets/norte-3.jpg';
import norte5 from '/assets/norte-4.jpg';

const Destination = () => {
  return (
    <section className="max-w-[1440px] mx-auto py-16 px-4">
      <h1>Lorem ipsum dolor sit.</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={norte1}
          alt=""
        />
        <img className="w-full h-full object-fit" src={norte2} alt="" />
        <img className="w-full h-full object-fit" src={norte3} alt="" />
        <img className="w-full h-full object-fit" src={norte4} alt="" />
        <img className="w-full h-full object-fit" src={norte5} alt="" />
      </div>
    </section>
  );
};

export default Destination;
