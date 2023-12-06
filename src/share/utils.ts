import { nanoid } from 'nanoid';
import {
  IHotkeyConfig,
  IHotkeyProfileItem,
  IHotkeyRawConfig,
  IHotkeyRawConfigItem,
} from './types';

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

export const getInitProfile = (): IHotkeyProfileItem => {
  return {
    id: nanoid(),
    title: '新增热键集',
    config: [
      {
        label: '释放技能',
        value: '/skill',
      },
  ],
  };
};

export const transformProfileConfig2GameConfig = (
  profile: IHotkeyProfileItem
): IHotkeyRawConfig => {
  return {
    hotkeys: {
      hotkey: profile.config.map((item, index) => {
        return {
          '@_index': index.toString(),
          '@_text': item.value,
          '@_comment': item.label,
        };
      }),
    },
  };
};
