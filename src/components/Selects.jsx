import React from 'react';
import select1 from '../../assets/norte-1.webp';
import select2 from '../../assets/norte-2.jpg';
import select3 from '../../assets/norte-3.jpg';
import select4 from '../../assets/norte-4.jpg';
import select5 from '../../assets/norte-5.jpg';
import select6 from '../../assets/norte-6.jpg';
import Cards from './Cards';

function Selects() {
  return (
    <div className="max-w-[1440px] mx-auto px-4- py-16 grid sm:grid-cols-2 lg:grid-col-3 gap-4">
      <Cards bg={select1} text="Windmill" />
      <Cards bg={select2} text="Windmill" />
      <Cards bg={select1} text="Windmill" />
      <Cards bg={select1} text="Windmill" />
      <Cards bg={select1} text="Windmill" />
      <Cards bg={select1} text="Windmill" />
    </div>
  );
}

export default Selects;
