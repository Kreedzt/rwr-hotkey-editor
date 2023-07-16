/**
 * xml 原始格式配置项
 */
export interface IHotkeyRawConfigItem {
  '@_index': string;
  '@_text': string;
}

export interface IHotkeyRawConfig {
  hotkeys: {
    hotkey: IHotkeyRawConfigItem[];
  };
}

export interface IHotkeyConfigItem {
  label: string;
  value: string;
}

export interface IHotkeyProfileItem {
  id: string;
  title: string;
  config: IHotkeyConfigItem[];
}

export type IHotkeyConfig = {
  hotkeys: IHotkeyProfileItem[];
};

export type IHotKeyProfileCreateItem = Omit<IHotkeyProfileItem, 'id'>;
