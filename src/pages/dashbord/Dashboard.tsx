import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HotkeyListItem from '../../components/hotkey/HotkeyListItem';

type DashboardProps = {
  //
};

const Dashboard: FC<DashboardProps> = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Button>添加热键集</Button>
        </Grid>
        <Grid item xs={12}>
          <HotkeyListItem data={[]} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
