import React, { useState } from 'react';
import FloatingNavbar from '../FloatingNavbar';
import NewMenu from '../NewMenu';
const NormalPagecontainer = ({ children, isVideoPage }) => {
  const [menu, setMenu] = useState(false);
  return (
    <main className="relative">
      <FloatingNavbar
        isVideoPage={isVideoPage}
        //NOTE: esta funcion va a poner el menu desde aqui hasta el boton se pasa como propiedad
        activeMenu={() => setMenu(true)}
      />

      {/*iseMenuActive igual a menu para saber si es true o false*/}

      <NewMenu isMenuActive={menu} CloseMenu={() => setMenu(false)} />
      {/*cerrar el menu con un click afuera del estado*/}
      <div onClick={() => setMenu(false)}>{children}</div>
    </main>
  );
};

export default NormalPagecontainer;
