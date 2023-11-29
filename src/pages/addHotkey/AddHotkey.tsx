import React, { FC, useCallback, useState } from 'react';
import { redirect, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import HotkeyProfileForm from '../../forms/HotkeyProfile/HotkeyProfileForm';
import { IHotkeyProfileItem } from '../../share/types';

type AddStateProps = {
  //
};

const getInitData = (): IHotkeyProfileItem => {
  return {
    id: nanoid(),
    title: '新增热键集',
    config: [
      {
        label: '释放技能',
        value: '/skill',
      }
    ],
  };
};

const AddHotkey: FC<AddStateProps> = () => {
  const [config, setConfig] = useState<IHotkeyProfileItem>(getInitData());

  const onSubmit = useCallback(() => {
    console.log('AddState: onSubmit');
  }, []);

  return (
    <div>
      <Link to="/dashboard">
        <Button variant="outlined">返回</Button>
      </Link>

      <Typography variant="h4">添加热键集</Typography>
      <HotkeyProfileForm item={config} />
    </div>
  );
};

export default AddHotkey;
