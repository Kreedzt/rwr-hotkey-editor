import React, { FC, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useComputed } from '@preact/signals-react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IHotkeyProfileItem } from '../../share/types';
import HotkeyProfileForm from '../../forms/HotkeyProfile/HotkeyProfileForm';
import { hotKeyConfig, updateProfile } from '../../store/config';

type EditHotkeyProps = {
  //
};

const EditHotkey: FC<EditHotkeyProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotkey = useComputed(() => hotKeyConfig.value.hotkeys.find(data => data.id === id));


  const onSubmit = useCallback(async (v: IHotkeyProfileItem) => {
    console.log('EditHotkey: onSubmit', v);
    await updateProfile(v);
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div>
      <Link to="/dashboard">
        <Button variant="outlined">返回</Button>
      </Link>

      <Typography variant="h4">编辑热键集</Typography>
      <HotkeyProfileForm item={hotkey.value!} onSubmit={onSubmit} />
    </div>
  )
};

export default EditHotkey;
