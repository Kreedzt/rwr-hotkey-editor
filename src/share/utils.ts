import { IHotkeyConfig, IHotkeyRawConfig } from './types';

export const getInitConfig = (): IHotkeyConfig => {
  return {
    hotkeys: [],
  };
};

export const getInitRawConfig = (): IHotkeyRawConfig => {
  return {
    hotkeys: {
      hotkey: [],
    },
  };
};
