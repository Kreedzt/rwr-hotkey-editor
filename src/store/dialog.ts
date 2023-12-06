import { batch, signal } from '@preact/signals-react';

export const globalDialogVisible = signal(false);

export const globalDialogConfig = signal<{
  title: string;
  content: string;
  confirmText: string;
  cancelText: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}>({
  title: '',
  content: '',
  confirmText: '确认',
  cancelText: '取消',
});

export const showGlobalDialog = (params: {
  title: string;
  content: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}) => {
  batch(() => {
    globalDialogVisible.value = true;
    globalDialogConfig.value = {
      ...globalDialogConfig.value,
      ...params,
    };
  });
};

export const hideGlobalDialog = () => {
  globalDialogVisible.value = false;
};
