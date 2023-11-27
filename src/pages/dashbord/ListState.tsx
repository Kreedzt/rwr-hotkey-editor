import React, { FC, useCallback } from 'react';
import HotkeyConfigCard from '../../components/hotkey/HotkeyConfigCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DashboardVisibleTypeEnum } from './enums';
import { activeType, hotKeyConfig } from './store';

type ListStateProps = {
  // onAdd: () => void;
};

const ListState: FC<ListStateProps> = () => {
  const list = hotKeyConfig.value.hotkeys;
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
          {list.map(item => (
            <HotkeyConfigCard key={item.id} data={item} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ListState;
