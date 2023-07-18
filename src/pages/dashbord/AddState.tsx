import React, { FC } from 'react';
import { Typography } from '@mui/material';
import HotkeyItemForm from '../../forms/HotkeyItem/HotkeyItemForm';
import HotkeyProfileForm from '../../forms/HotkeyProfile/HotkeyProfileForm';

type AddStateProps = {
  //
};

const AddState: FC<AddStateProps> = () => {
  return (
    <div>
      <Typography variant="h4">
        AddState
        <HotkeyProfileForm />
      </Typography>
    </div>
  );
};

export default AddState;
