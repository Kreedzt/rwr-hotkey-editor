import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
