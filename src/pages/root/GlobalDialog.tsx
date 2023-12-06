import React, { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import {
  globalDialogConfig,
  globalDialogVisible,
  hideGlobalDialog,
} from '../../store/dialog';
import { batch } from '@preact/signals-react';

type GlobalDialogProps = {};

const GlobalDialog: FC<GlobalDialogProps> = () => {
  return (
    <Dialog open={globalDialogVisible.value}>
      <DialogTitle>{globalDialogConfig.value.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {globalDialogConfig.value.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            batch(() => {
              globalDialogConfig.value.onCancel?.();
              hideGlobalDialog();
            });
          }}
        >
          {globalDialogConfig.value.cancelText}
        </Button>
        <Button
          onClick={() => {
            batch(() => {
              globalDialogConfig.value.onConfirm?.();
              hideGlobalDialog();
            });
          }}
        >
          {globalDialogConfig.value.confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GlobalDialog;
