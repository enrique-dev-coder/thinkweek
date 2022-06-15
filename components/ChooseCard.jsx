import React from 'react';
const ChooseCard = ({
  title,
  desc,
  color,
  features,
  isCorporatePage = false,
  cardtext,
  link,
}) => {
  return (
    <div
      className={`w-[300px] mb-[30px] ${
        isCorporatePage ? 'h-[550px]' : 'h-[440px]'
      }  shadow-md`}
      style={{
        filter: 'drop-shadow(0px 10px 30px rgba(9, 14, 37, 0.08));',
        borderTop: `solid 8px ${color}`,
      }}
    >
      <div className="w-4/5 mx-auto h-full flex flex-col justify-around">
        <h2
          className="text-[2.3rem] text-center font-medium "
          style={{ color: `${color}` }}
        >
          {title}
        </h2>
        <p className="text-[1.2rem] text-center">{desc}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <button
            className="text-[1.4rem] py-3 px-3"
            style={{ background: `${color}`, color: '#F5F2F0' }}
          >
            {cardtext}
          </button>
        </a>
        {/*Features*/}
        <div
          className={`${
            isCorporatePage ? 'h-[300px]' : 'h-[240px]'
          }  flex flex-col space-y-4`}
        >
          {features.map((f, i) => (
            <div key={i} className="flex space-x-4">
              <img
                src="/img/check.png"
                alt="circulito"
                className="w-[20px] h-[20px]"
              />
              <p className="text-[14px] flex-1">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
