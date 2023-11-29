import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import HotkeyConfigCard from '../../components/hotkey/HotkeyConfigCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { hotKeyConfig } from '../../store/config';

const HotkeyList: FC = () => {
  const list = hotKeyConfig.value.hotkeys;

  return (
    <div>
      <Grid item xs={12}>
        <Link to="/dashboard/add">
          <Button>添加热键集</Button>
        </Link>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          {list.map((item) => (
            <HotkeyConfigCard key={item.id} data={item} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default HotkeyList;
