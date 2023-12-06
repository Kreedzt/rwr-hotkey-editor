import React, { FC, useCallback, useEffect } from 'react';
import { open as shellOpen } from '@tauri-apps/api/shell';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StoreServiceInst } from '../../services/store';

type SettingsProps = {
  //
};

const Settings: FC<SettingsProps> = () => {
  const onResetConfig = useCallback(async () => {
    try {
      await StoreServiceInst.resetConfig();
    } catch (e) {
      console.log('resetConfig error', e);
    }
  }, []);

  const onOpenConfigFile = useCallback(async () => {
    try {
      await shellOpen(await StoreServiceInst.getConfigPath());
    } catch (e) {
      console.log('openConfigFile error', e);
    }
  }, []);

  useEffect(() => {
    StoreServiceInst.loadRaw();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="flex gap-x-2">
            <Button variant="contained" color="error" onClick={onResetConfig}>
              重置配置
            </Button>
            <Button variant="contained" onClick={onOpenConfigFile}>
              使用外部工具编辑
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
