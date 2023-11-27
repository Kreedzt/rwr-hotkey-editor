import { DashboardVisibleTypeEnum } from './enums';
import { nanoid } from 'nanoid';
import {
  IHotKeyProfileCreateItem,
  IHotkeyProfileItem,
  IHotkeyConfig,
} from '../../share/types';
import { StoreServiceInst } from '../../services/store';
import { getInitConfig } from '../../share/utils';
import { signal } from '@preact/signals-react';

export const hotKeyConfig = signal<IHotkeyConfig>(getInitConfig());

export const activeType = signal<DashboardVisibleTypeEnum>(DashboardVisibleTypeEnum.LIST);

const saveProfile = async () => {
  await StoreServiceInst.updateConfig(hotKeyConfig.value);
}

export const createProfile = async (profile: IHotKeyProfileCreateItem) => {
  const newProfile: IHotkeyProfileItem = {
    ...profile,
    id: nanoid(),
  };

  hotKeyConfig.value.hotkeys = [...hotKeyConfig.value.hotkeys,newProfile];

  await saveProfile();
}

export const updateProfile = async (profile: IHotkeyProfileItem) => {
  hotKeyConfig.value.hotkeys = hotKeyConfig.value.hotkeys.map((item) => {
    if (item.id === profile.id) {
      return profile;
    }

    return item;
  });

  await saveProfile();
}

export const deleteProfile = async (id: string) => {
  hotKeyConfig.value.hotkeys = hotKeyConfig.value.hotkeys.filter((item) => item.id !== id);

  await saveProfile();
}
