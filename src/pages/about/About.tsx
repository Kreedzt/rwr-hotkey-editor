import React, { FC, useCallback } from 'react';
import { open } from '@tauri-apps/api/shell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { SOURCE_CODE_URL, AUTHORS } from '../../constants';
import { appInfo } from '../../store/config';

const About: FC = () => {
    const appInfoVal = appInfo.value;

  const onSrcClick = useCallback(async () => {
    try {
      console.log('open url:', SOURCE_CODE_URL);
      await open(SOURCE_CODE_URL);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
      <Box>
          <Box p={2}>
              <Typography variant="h5">RWR 热键编辑器</Typography>
          </Box>

          <Divider />

          <Box p={2}>
              <Typography variant="subtitle1">
                  应用名称: {appInfoVal.name}
              </Typography>
              <Typography variant="subtitle1">
                  应用版本: {appInfoVal.version}
              </Typography>
              <Typography variant="subtitle1">作者: {AUTHORS.join(',')}</Typography>
              <Typography variant="subtitle1">
                  <Button variant="text" onClick={onSrcClick}>
                      获取源代码
                  </Button>
              </Typography>
          </Box>
      </Box>
  );
};

export default About;
