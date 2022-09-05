import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ImageComponent from '../../shared/ImageComponent';

const NavLink = ({ children, path, icon }) => {
  const { pathname, query } = useRouter();

  const isActive = pathname === path.href && query?.page === path?.query?.page;

  return (
    <Link href={path}>
      <a
        className={`flex flex-row items-center gap-4 px-3 rounded-r-lg md:px-9 py-3  ${
          isActive && 'bg-[#E4F2E6]'
        }`}
      >
        <ImageComponent
          src={`/assets/settings/${isActive ? `s-${icon}` : icon}`}
          className="w-[20%] h-6"
        />
        <h3
          className={`text-black text-[18px] w-3/4 ${
            isActive ? 'text-[#434343] font-semibold' : 'text-[#919191]'
          }  md:block hidden`}
        >
          {children}
        </h3>
      </a>
    </Link>
  );
};

export default NavLink;