import React, { FC } from 'react';
import { useDashboardContext } from './DashboardContext';
import { DashboardVisibleTypeEnum } from './enums';
import AddState from './AddState';
import EditState from './EditState';
import ListState from './ListState';
import { activeType } from './store';

type SwitchTypeEntryProps = {
  //
};

const SwitchTypeEntry: FC<SwitchTypeEntryProps> = () => {
  const active = activeType.value;

  switch (active) {
    case DashboardVisibleTypeEnum.ADD:
      return <AddState />;
    case DashboardVisibleTypeEnum.EDIT:
      return <EditState />;
    case DashboardVisibleTypeEnum.LIST:
      return <ListState />;
  }
};

export default SwitchTypeEntry;
