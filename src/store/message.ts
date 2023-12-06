import { signal } from '@preact/signals-react';

export const globalMessageVisible = signal<boolean>(false);

export const globalMessage = signal<{
  title: string;
  type: 'success' | 'error' | 'warning' | 'info';
}>({
  title: '',
  type: 'success',
});

export const showGlobalMessage = (params: {
  title: string;
  type: 'success' | 'error' | 'warning' | 'info';
}) => {
  globalMessage.value = {
    title: params.title,
    type: params.type,
  };

  globalMessageVisible.value = true;
};

export const hideGlobalMessage = () => {
  globalMessageVisible.value = false;
};
