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
        className={`flex flex-row items-center justify-center md:justify-start gap-4 px-3 md:px-9 py-3 w-1/2 md:w-full whitespace-nowrap  ${
          isActive && 'bg-[#CADBB6]'
        }`}
      >
        <ImageComponent
          src={`/assets/settings/${isActive ? `s-${icon}` : icon}`}
          className="md:w-[20%] h-6  md:h-6"
        />
        <h3
          className={`text-black text-[12px] md:text-[18px] md:w-3/4 ${
            isActive ? 'text-[#434343] font-semibold' : 'text-[#919191]'
          }`}
        >
          {children}
        </h3>
      </a>
    </Link>
  );
};

export default NavLink;