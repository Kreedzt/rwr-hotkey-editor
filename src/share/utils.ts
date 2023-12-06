import { nanoid } from 'nanoid';
import { z } from 'zod';
import {
  IHotkeyConfig,
  IHotkeyProfileItem,
  IHotkeyRawConfig,
  IHotkeyRawConfigItem,
  IShareProfileItem,
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

export const transformProfileConfig2ShareConfig = (profile: IHotkeyProfileItem): IShareProfileItem => {
  const shareItem: IShareProfileItem = {
    type: 'profile',
    value: {
      title: profile.title,
      config: profile.config
    }
  };

  return shareItem;
};

const shareProfileSchema = z.object({
  type: z.string(),
  value: z.object({
    title: z.string(),
    config: z.array(z.object({
      label: z.string(),
      value: z.string()
    }))
  })
});


export const validateProfileShareConfig = (text: string): boolean => {
  if (text.trim() === '') {
    return false;
  }

  let isValid = true;

  try {
    const val = JSON.parse(text);
    shareProfileSchema.parse(val);
    isValid = true;
  } catch(e) {
    isValid = false;
  }

  return isValid;
}

export const transformShareConfig2ProfileConfig = (share: IShareProfileItem): IHotkeyProfileItem => {
  const profile: IHotkeyProfileItem = {
    id: nanoid(),
    title: share.value.title,
    config: share.value.config
  };

  return profile;
}
