import React, { FC, useCallback } from 'react';
import HotkeyConfigItem from '../../components/hotkey/HotkeyConfigItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useDashboardContext } from './DashboardContext';
import { DashboardVisibleTypeEnum } from './enums';
import { observer } from 'mobx-react-lite';

type ListStateProps = {
  // onAdd: () => void;
};

const ListState: FC<ListStateProps> = () => {
  const { store } = useDashboardContext();

  const onAddClick = useCallback(() => {
    store.updateActiveType(DashboardVisibleTypeEnum.ADD);
  }, []);

  return (
    <div>
      <Grid item xs={12}>
        <Button onClick={onAddClick}>添加热键集</Button>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <HotkeyConfigItem data={[]} />
        </Grid>
      </Grid>
    </div>
  );
};

export default observer(ListState);
