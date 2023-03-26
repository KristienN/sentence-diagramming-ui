import React from 'react';

type navInfo = {
  name: string;
  href: string;
};

const NavbarItem = ({ name, href }: navInfo) => {
  return (
    <a className="hover:text-gray-400 block px-5 hover:cursor-pointer" href={href}>
      {name}
    </a>
  );
};

export default NavbarItem;
