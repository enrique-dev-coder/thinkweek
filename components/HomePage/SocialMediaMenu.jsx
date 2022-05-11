import React from 'react';

const SocialMediaMenu = () => {
  const SocialMedia = ['Linkedin', 'Instagram', 'Tik Tok'];
  return (
    <div className="flex space-x-8">
      {SocialMedia.map((s, i) => (
        <p key={i} className="text-white uppercase text-[1.4rem] lg:text-2xl">
          {s}
        </p>
      ))}
    </div>
  );
};

export default SocialMediaMenu;
