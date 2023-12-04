import React, { FC, useCallback, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import HotkeyProfileForm from '../../forms/HotkeyProfile/HotkeyProfileForm';
import { IHotkeyProfileItem } from '../../share/types';
import { createProfile } from '../../store/config';

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
  const navigate = useNavigate();
  const [config, setConfig] = useState<IHotkeyProfileItem>(getInitData());

  const onSubmit = useCallback(async (v: IHotkeyProfileItem) => {
    console.log('AddState: onSubmit', v);
    await createProfile(v);
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div>
      <Link to="/dashboard">
        <Button variant="outlined">返回</Button>
      </Link>

      <Typography variant="h4">添加热键集</Typography>
      <HotkeyProfileForm item={config} onSubmit={onSubmit} />
    </div>
  );
};

export default AddHotkey;
