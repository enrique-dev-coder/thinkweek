import React from 'react';

const SocialMediaMenu = () => {
  const SocialMedia = [
    {
      id: 1,
      link: 'https://www.linkedin.com/company/thinkweek/',
      title: 'Linkedin',
    },
    {
      id: 2,
      link: 'https://www.instagram.com/thinkweek.company/',
      title: 'Instagram',
    },
    { id: 3, link: 'https://vm.tiktok.com/ZMLTGBhJy', title: 'Tik Tok' },
  ];
  return (
    <div className="flex space-x-8">
      {SocialMedia.map((s) => (
        <a href={s.link} key={s.id} target="_blank" rel="noopener noreferrer">
          <p className="text-white uppercase text-[1.4rem] lg:text-2xl py-4 px-2">
            {s.title}
          </p>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaMenu;
