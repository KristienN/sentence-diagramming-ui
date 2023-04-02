import React from 'react';
import { Link } from 'react-router-dom';

type navInfo = {
  name: string;
  href: string;
};

const NavbarItem = ({ name, href }: navInfo) => {
  return (
    <Link to={href}>
      <a className="hover:text-gray-400 block px-5 hover:cursor-pointer">
        {name}
      </a>
    </Link>
  );
};

export default NavbarItem;
