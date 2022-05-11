import React from 'react';

const FloatingMenuButton = ({ onClickMenuButton }) => {
  return (
    <div className="relative flex items-center" onClick={onClickMenuButton}>
      <div className="w-[40px] h-[40px] border absolute left-[20px] border-yellow-400 rounded-full cursor-pointer"></div>
      <p className="uppercase text-yellow-400 text-xl cursor-pointer">MENU</p>
    </div>
  );
};

export default FloatingMenuButton;
