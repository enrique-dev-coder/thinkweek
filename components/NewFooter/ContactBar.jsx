import React from 'react';

const FooterRow = ({ src, desc }) => {
  return (
    <div className="w-full cursor-pointer  flex space-x-5 md:space-x-0 items-center">
      {src && <img src={src} alt={desc} />}
      <p className="flex-1 text-white text-[1.2rem]">{desc}</p>
    </div>
  );
};

const FooterCol = ({ title, children }) => {
  return (
    <div className="flex flex-col w-full md:w-[25%] space-y-4">
      <p className="font-bold text-[1.4rem] text-white">{title}</p>
      {children}
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className=" bg-amarilloThink h-auto md:h-[160px]">
      <div className="w-4/5 mx-auto h-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col py-10 space-y-10 md:space-y-0 md:flex-row  justify-between w-[90%] md:w-[80%]">
          <div className="block md:hidden">
            <img src="/img/FBrand.png" alt="Tw logo" className="w-[100px]" />
          </div>
          <FooterCol title="Síguenos en redes">
            <div className="flex w-full space-x-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Think-Week-108071664929840"
              >
                <img
                  src="/img/facebook.svg"
                  alt="Think week Facebook"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/thinkweek.company/"
              >
                <img
                  src="/img/insta.svg"
                  desc="@thinkweek.company"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vm.tiktok.com/ZMLTGBhJy/"
              >
                <img
                  src="/img/tiktok.png"
                  desc="@thinkweek.company"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/thinkweek"
              >
                <img
                  src="/img/linkedin.svg"
                  desc="@thinkweek.company"
                  className="w-[24px] h-[24px]"
                />
              </a>
            </div>
          </FooterCol>
          <FooterCol title="Contáctanos">
            <FooterRow src="/img/Message.svg" desc="info@thinkweek.company" />
            <FooterRow src="/img/Cellphone.svg" desc="(+34) 678672031" />
          </FooterCol>
          <FooterCol title="Encontrános">
            <FooterRow src="/img/Location.svg" desc="España" />
          </FooterCol>
          <FooterCol title="Avisos legales">
            <FooterRow desc="Think Week 2021 © Todos los derechos reservados. " />
          </FooterCol>
        </div>
        {/*logo Container*/}
        <div className="hidden md:block">
          <img src="/img/FBrand.png" alt="Tw logo" className="w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
