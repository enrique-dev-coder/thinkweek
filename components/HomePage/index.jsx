import React, { useState } from 'react';
import SocialMediaMenu from './SocialMediaMenu';
import Menu from './Menu';
import FloatingMenuButton from '../FloatingNavbar/FloatingMenuButton';
import NewMenu from '../NewMenu';
const NavbarMobileHomePage = ({ openMenuHome }) => (
  <div className="flex  justify-between items-center right-[15%] w-[80vw] top-10 absolute lg:hidden">
    <div>
      <img src="/img/logo.png" alt="logo thinkweek" className="w-[80px]" />
    </div>
    <div onClick={openMenuHome}>
      <FloatingMenuButton />
    </div>
  </div>
);

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [menu, setMenu] = useState(false);
  return (
    <div className=" max-w-[1440px] relative h-screen flex mx-auto">
      <NavbarMobileHomePage openMenuHome={() => setMenu(true)} />
      <div className="w-[70%] relative ">
        {/*Menu Social Media*/}
        <div className=" absolute  bottom-0  -rotate-90  -translate-y-[35rem] -translate-x-[9rem] lg:-translate-x-24   lg:-translate-y-80 ">
          <SocialMediaMenu />
        </div>
        {/*Logo*/}
        <div className="w-[96%] ml-auto  mt-20 hidden lg:block">
          <img src="/img/logo.png" alt="logo thinkweek" />
        </div>
        {/*Texto*/}
        <div className="w-[285px] lg:w-[515px] ml-auto border-b absolute -right-[75px] lg:right-0 bottom-[60px]">
          <p className="text-white text-[1.2rem] lg:text-sm xl:text-lg mb-3">
            El mundo te pide decisiones, nosotros te damos un espacio y método
            para pensarlas
          </p>
        </div>
      </div>
      <div className="w-[30%] hidden border-l lg:flex flex-col  border-l-white">
        <div className="w-[450px] h-[800px] absolute bottom-[60px] border-b border-b-white flex flex-col justify-end items-center  ">
          <Menu />
        </div>
      </div>

      <NewMenu isMenuActive={menu} CloseMenu={() => setMenu(false)} />
    </div>
  );
};

export default index;
