import React, { FC, useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import {
  globalMessage,
  globalMessageVisible,
  hideGlobalMessage,
} from '../../store/message';
import { Alert } from '@mui/material';

type GlobalSnackbarProps = {};

const GlobalSnackbar: FC<GlobalSnackbarProps> = () => {
  const onClose = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      hideGlobalMessage();
    },
    []
  );

  return (
    <Stack spacing={2}>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={globalMessageVisible.value}
        autoHideDuration={3000}
        onClose={onClose}
      >
        <Alert onClose={onClose} security={globalMessage.value.type}>
          {globalMessage.value.title}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default GlobalSnackbar;
