import { useEffect, useState } from 'react';
import Link from 'next/link';
import FloatingMenuButton from './FloatingMenuButton';
const index = ({ isVideoPage = false, activeMenu }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [top, setTop] = useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);
  console.log(top);
  return (
    <div
      className={`${
        isVideoPage && 'bg-black w-full barritaVideosMobile h-[100px] lg:h-0'
      } shadow-md lg:shadow-none fixed z-20 w-full top-0 bg-white ${
        !top && 'lg:shadow-lg backdrop-blur-md bg-white/75 pb-4'
      } `}
    >
      <nav
        className={`${
          isVideoPage ? '  absolute z-20 top-12 right-[40px] ' : 'mt-10'
        }   flex w-full mx-auto  max-w-[85vw] pb-[20px] lg:p-0  md:max-w-[95vw] xl:max-w-[95vw]  justify-between`}
      >
        <Link href="/">
          <img
            src="/img/logo.png"
            alt="Thinkweek"
            className="w-[114px] md:w-[128px] ml-0 md:ml-12   cursor-pointer"
          />
        </Link>
        <FloatingMenuButton onClickMenuButton={activeMenu} />
      </nav>
    </div>
  );
};

export default index;
