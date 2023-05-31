import React, { FC } from 'react';
import SwitchTypeEntry from './SwitchTypeEntry';
import DashboardProvider from './DashboardContext';

type DashboardProps = {
  //
};

const Dashboard: FC<DashboardProps> = () => {
  return (
    <DashboardProvider>
      <SwitchTypeEntry />
    </DashboardProvider>
  );
};

export default Dashboard;
