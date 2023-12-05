import { nanoid } from 'nanoid';
import { getName, getVersion } from '@tauri-apps/api/app';
import { DashboardVisibleTypeEnum } from './enums';
import {
  IHotKeyProfileCreateItem,
  IHotkeyProfileItem,
  IHotkeyConfig,
} from '../share/types';
import { StoreServiceInst } from '../services/store';
import { getInitConfig } from '../share/utils';
import { signal } from '@preact/signals-react';

// state
export const hotKeyConfig = signal<IHotkeyConfig>(getInitConfig());
export const appInfo = signal<{
  name: string;
  version: string;
}> ({
  name: '',
  version: '0.0.1'
});

const saveProfile = async () => {
  await StoreServiceInst.updateConfig(hotKeyConfig.value);
}

// 初始化
export const initConfig = async () => {
  // 初始化配置
  await StoreServiceInst.initConfigFile();
  const recordConfig = await StoreServiceInst.loadConfig();
  hotKeyConfig.value = recordConfig;

  // 初始化版本信息
  const [name, version] = await Promise.all([
    getName(),
    getVersion()
  ]);
  appInfo.value = {
    name,
    version
  };
}

export const createProfile = async (profile: IHotkeyProfileItem) => {
  const newProfile: IHotkeyProfileItem = {
    ...profile,
    id: nanoid(),
  };

  hotKeyConfig.value.hotkeys = [...hotKeyConfig.value.hotkeys,newProfile];

  await saveProfile();
}

export const updateProfile = async (profile: IHotkeyProfileItem) => {
  hotKeyConfig.value = {
    ...hotKeyConfig.value,
    hotkeys: hotKeyConfig.value.hotkeys.map((item) => {
      if (item.id === profile.id) {
        return profile;
      }

      return item;
    })
  };

  await saveProfile();
}

export const deleteProfile = async (id: string) => {
  hotKeyConfig.value = {
    ...hotKeyConfig.value,
    hotkeys: hotKeyConfig.value.hotkeys.filter((item) => item.id !== id)
  };

  await saveProfile();
}
