import React, { FC } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { routes } from '../../routes';

type RootProps = {
  //
};

const Root: FC<RootProps> = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[260px] border-r border-grey-500">
        <MenuList>
          {routes.map((r) => (
            <NavLink to={r.path} key={r.path}>
              {({ isActive }) => (
                <MenuItem key={r.path} selected={isActive}>
                  <ListItemText>{r.name}</ListItemText>
                </MenuItem>
              )}
            </NavLink>
          ))}
        </MenuList>
      </div>
      <div className="flex-1 h-screen p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
