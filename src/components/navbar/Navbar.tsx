import React from 'react';
import NavbarItem from './NavbarItem';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav data-cy="navbar" className="relative px-6 mx-auto p-4 border-b-2 w-full">

      <div className="container mx-auto flex items-center justify-between">
        <div className="pt-2">
          <Link to="/">
          <a className="text-3xl italic text-left">
            Sentence Diagramming Tool
          </a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items center pt-2">

          <NavbarItem name="Draw" href="/draw" />
          <NavbarItem name="Quizzes" href="" />
          <NavbarItem name="Test" href="/quiz" />
        </div>
        <Link to={"/learn"}><a className="border border-black text-xl px-6 py-2 md:visible invisible" href="/learn">
          Learn
        </a>
        </Link>
        <Bars3Icon className="h-8 w-8 hover:text-gray-400 hover:cursor-pointer md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
