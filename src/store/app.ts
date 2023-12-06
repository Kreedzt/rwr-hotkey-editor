import { getName, getVersion } from '@tauri-apps/api/app';
import { signal } from '@preact/signals-react';

export const appInfo = signal<{
  name: string;
  version: string;
}>({
  name: 'rwr-hotkey-editor',
  version: '0.0.1',
});

export const initAppInfo = async () => {
    // 初始化版本信息
  const [name, version] = await Promise.all([getName(), getVersion()]);
  appInfo.value = {
    name,
    version,
  };
}
