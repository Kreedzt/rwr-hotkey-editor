import React, { FC } from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import HotkeyConfigList from '../../components/hotkey/HotkeyConfigList';
import { IHotkeyConfigItem, IHotkeyProfileItem } from '../../share/types';

type HotkeyProfileFormProps = {
  item: IHotkeyProfileItem;
};

const MOCK_DATA: IHotkeyConfigItem[] = [
  {
    id: '1',
    label: 'label1',
    value: 'value1',
  },
  {
    id: '2',
    label: 'label2',
    value: 'value2',
  },
];

const HotkeyProfileForm: FC<HotkeyProfileFormProps> = ({ item }) => {
  return (
    <Box component="form" autoComplete="off">
      <p>HotkeyProfileForm</p>

      <TextField required label="标题" variant="outlined" />
      <TextField multiline label="描述" variant="outlined" />
      <HotkeyConfigList data={MOCK_DATA} />
    </Box>
  );
};

export default HotkeyProfileForm;
