import React from 'react';

const SolidButton = ({ title }) => {
  return (
    <button className=" text-white  font-medium py-2 px-3 rounded-md bg-amarilloThink border  text-[1.6rem] ml-10">
      {title}
    </button>
  );
};

export default SolidButton;
