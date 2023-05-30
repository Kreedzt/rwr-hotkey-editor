export interface IHotkeyConfigItem {
  label: string;
  value: string;
}

export interface IHotkeyProfileItem {
  id: string;
  title: string;
  config: IHotkeyConfigItem[];
}

export type IHotkeyProfileList = IHotkeyProfileItem[];
