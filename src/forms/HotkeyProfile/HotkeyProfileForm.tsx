import React, { FC } from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

type HotkeyProfileFormProps = {
  //
};

const HotkeyProfileForm: FC<HotkeyProfileFormProps> = () => {
  return (
    <Box component="form" autoComplete="off">
      <p>HotkeyProfileForm</p>

      <TextField required label="标题" variant="outlined" />
      <TextField multiline label="描述" variant="outlined" />
    </Box>
  );
};

export default HotkeyProfileForm;
