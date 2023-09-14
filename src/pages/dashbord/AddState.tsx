import React, { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import HotkeyProfileForm from '../../forms/HotkeyProfile/HotkeyProfileForm';
import { IHotkeyProfileItem } from '../../share/types';

type AddStateProps = {
  //
};

const getInitData = (): IHotkeyProfileItem => {
  return {
    id: nanoid(),
    title: '新增配置',
    config: [
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
    ],
  };
};

const AddState: FC<AddStateProps> = () => {
  const [config, setConfig] = useState<IHotkeyProfileItem>(getInitData());

  return (
    <div>
      <Typography variant="h4">AddState</Typography>
      <HotkeyProfileForm item={config} />
    </div>
  );
};

export default AddState;
