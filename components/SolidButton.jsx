import React from 'react';
import Link from 'next/link';

const SolidButton = ({ title, src }) => {
  return (
    <Link href="/contact">
      <button className=" text-white  font-medium py-2 px-3 rounded-md bg-amarilloThink border  text-[1.6rem] ml-10">
        {title}
      </button>
    </Link>
  );
};

export default SolidButton;
