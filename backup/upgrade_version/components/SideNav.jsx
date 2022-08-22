import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data';

const SideNav = () => {
  return (
    <ul className='nav__side'>
      {links.map(({ name, path }, index) => {
        return (
          <li>
            <NavLink to={path}>{name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SideNav;
