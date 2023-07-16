import React, { FC, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StoreService } from '../../services/store';

type SettingsProps = {
  //
};

const Settings: FC<SettingsProps> = () => {
  useEffect(() => {
    StoreService.getSelf().loadRaw();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="flex gap-x-2">
            <Button variant="contained" color="error">
              重置配置
            </Button>
            <Button variant="contained">使用外部工具编辑</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
