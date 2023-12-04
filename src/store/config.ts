import { DashboardVisibleTypeEnum } from './enums';
import { nanoid } from 'nanoid';
import {
  IHotKeyProfileCreateItem,
  IHotkeyProfileItem,
  IHotkeyConfig,
} from '../share/types';
import { StoreServiceInst } from '../services/store';
import { getInitConfig } from '../share/utils';
import { signal } from '@preact/signals-react';

export const hotKeyConfig = signal<IHotkeyConfig>(getInitConfig());

const saveProfile = async () => {
  await StoreServiceInst.updateConfig(hotKeyConfig.value);
}

export const initConfig = async () => {
  await StoreServiceInst.initConfigFile();
  const recordConfig = await StoreServiceInst.loadConfig();
  hotKeyConfig.value = recordConfig;
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
