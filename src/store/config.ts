import { nanoid } from 'nanoid';
import { IHotkeyProfileItem, IHotkeyConfig } from '../share/types';
import { StoreServiceInst } from '../services/store';
import { getInitConfig } from '../share/utils';
import { signal } from '@preact/signals-react';

// state
export const hotKeyConfig = signal<IHotkeyConfig>(getInitConfig());

const saveProfile = async () => {
  await StoreServiceInst.updateConfig(hotKeyConfig.value);
};

// 初始化
export const initConfig = async () => {
  // 初始化配置
  await StoreServiceInst.initConfigFile();
  const recordConfig = await StoreServiceInst.loadConfig();
  hotKeyConfig.value = recordConfig;
};

export const createProfile = async (profile: IHotkeyProfileItem) => {
  const newProfile: IHotkeyProfileItem = {
    ...profile,
    id: nanoid(),
  };

  hotKeyConfig.value = {
    ...hotKeyConfig.value,
    hotkeys: [...hotKeyConfig.value.hotkeys, newProfile],
  };

  await saveProfile();
};

export const updateProfile = async (profile: IHotkeyProfileItem) => {
  hotKeyConfig.value = {
    ...hotKeyConfig.value,
    hotkeys: hotKeyConfig.value.hotkeys.map((item) => {
      if (item.id === profile.id) {
        return profile;
      }

      return item;
    }),
  };

  await saveProfile();
};

export const getProfile = (id: string) => {
  return hotKeyConfig.value.hotkeys.find((item) => item.id === id);
};

export const deleteProfile = async (id: string) => {
  hotKeyConfig.value = {
    ...hotKeyConfig.value,
    hotkeys: hotKeyConfig.value.hotkeys.filter((item) => item.id !== id),
  };

  await saveProfile();
};
