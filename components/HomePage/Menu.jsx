import React from 'react';
import Link from 'next/link';
const Menu = () => {
  const menuItems = [
    {
      link: '/Parar',
      item: 'Parar',
    },
    {
      link: '/Pensar',
      item: 'Pensar',
    },
    {
      link: '/Actuar',
      item: 'Actuar',
    },
    {
      link: '/nosotros',
      item: 'Nosotros',
    },
  ];
  return (
    <div className=" flex  flex-col h-[70%] justify-around ">
      {menuItems.map((i) => (
        <Link href={i.link} key={i.item}>
          <div className="relative flex items-center cursor-pointer ">
            {/*circulito*/}
            <div className=" border border-white w-[45px] h-[45px] rounded-full absolute -left-[18px] -top-[10px] "></div>
            <p className="text-white uppercase  text-3xl tracking-wider ">
              {i.item}
            </p>
            <img
              src="/img/largeArrow.png"
              alt="link arrow"
              className="w-[20px] h-[9px] ml-5"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
