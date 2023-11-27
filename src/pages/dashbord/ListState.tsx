import React, { FC, useCallback } from 'react';
import HotkeyConfigItem from '../../components/hotkey/HotkeyConfigItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DashboardVisibleTypeEnum } from './enums';
import { IHotkeyConfigItem } from '../../share/types';
import { activeType } from './store';

type ListStateProps = {
  // onAdd: () => void;
};

const ListState: FC<ListStateProps> = () => {
  const onAddClick = useCallback(() => {
    activeType.value = DashboardVisibleTypeEnum.ADD;
  }, []);

  return (
    <div>
      <Grid item xs={12}>
        <Button onClick={onAddClick}>添加热键集</Button>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <HotkeyConfigItem
            data={{
              id: '1',
              label: 'label1',
              value: 'value1',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ListState;
