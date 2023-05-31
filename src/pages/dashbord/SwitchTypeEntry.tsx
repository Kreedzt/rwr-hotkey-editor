import React, { FC } from 'react';
import { useDashboardContext } from './DashboardContext';
import { observer } from 'mobx-react-lite';
import { DashboardVisibleTypeEnum } from './enums';
import AddState from './AddState';
import EditState from './EditState';
import ListState from './ListState';

type SwitchTypeEntryProps = {
  //
};

const SwitchTypeEntry: FC<SwitchTypeEntryProps> = () => {
  const { store } = useDashboardContext();

  switch (store.activeType) {
    case DashboardVisibleTypeEnum.ADD:
      return <AddState />;
    case DashboardVisibleTypeEnum.EDIT:
      return <EditState />;
    case DashboardVisibleTypeEnum.LIST:
      return <ListState />;
  }
};

export default observer(SwitchTypeEntry);
