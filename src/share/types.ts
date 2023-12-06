/**
 * xml 原始格式配置项
 */
export interface IHotkeyRawConfigItem {
  '@_index': string;
  '@_text': string;
  '@_comment'?: string;
}

export interface IHotkeyRawConfig {
  hotkeys: {
    hotkey: IHotkeyRawConfigItem[];
  };
}

// 单项 hotkey 配置
export interface IHotkeyConfigItem {
  // 描述
  label: string;
  // 热键值
  value: string;
}

// 单项 hotkeys.xml 文件配置
export interface IHotkeyProfileItem {
  id: string;
  title: string;
  config: IHotkeyConfigItem[];
}

export type IHotkeyConfig = {
  hotkeys: IHotkeyProfileItem[];
};

export type IHotKeyProfileCreateItem = Omit<IHotkeyProfileItem, 'id'>;

// 分享配置
export interface IShareProfileItem {
  type: 'profile',
  value: Omit<IHotkeyProfileItem, 'id'>;
}
