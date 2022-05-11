import React from 'react';

const HeaderPAgeParagraph = ({ title, description }) => {
  return (
    <div className="text-white w-10/12 mx-auto">
      <h3 className=" font-semibold text-[1.6rem] md:text-[2rem] uppercase mb-5">
        {title}
      </h3>
      <p className="w-11/12 text-[1.2rem] md:text-[1.3rem] font-light">
        {description}
      </p>
    </div>
  );
};

export default HeaderPAgeParagraph;
