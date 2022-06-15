import React from 'react';

import { useMusic } from '../context/Audiocontext';

export default function VolumeButton2({ color }) {
  //usar el playing y el handle playing para modificar el sonido
  const { playing, handlePlaying } = useMusic();

  return (
    <>
      <button onClick={handlePlaying}>
        {playing ? (
          //los svg cambian entre white y yellow
          <div className="flex items-center space-x-4">
            <p
              className={`text-[1.4rem] ${
                color === 'white' ? 'text-white' : 'text-amarilloThink'
              }`}
            >
              ON
            </p>
            <img
              src={`/img/arrowdown_${color}.svg`}
              className="w-[12px] h-[6px]"
            />
            <img
              src={`/img/newvolumebutton_${color}.svg`}
              alt="Activa el audio"
              className="w-[24px] h-[24px]"
            />
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <p
              className={`text-[1.4rem] ${
                color === 'white' ? 'text-white' : 'text-amarilloThink'
              }`}
            >
              OFF
            </p>
            <img
              src={`/img/arrowdown_${color}.svg`}
              className="w-[12px] h-[6px]"
            />
            <img
              src={`/img/novolume_${color}.svg`}
              alt="Activa el audio"
              className="w-[24px] h-[24px]"
            />
          </div>
        )}
      </button>
    </>
  );
}
