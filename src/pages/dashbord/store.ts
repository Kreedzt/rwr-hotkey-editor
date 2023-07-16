import { makeAutoObservable } from 'mobx';
import { DashboardVisibleTypeEnum } from './enums';
import { nanoid } from 'nanoid';
import {
  IHotKeyProfileCreateItem,
  IHotkeyProfileItem,
  IHotkeyConfig,
} from '../../share/types';
import { StoreServiceInst } from '../../services/store';
import { getInitConfig } from '../../share/utils';

export class DashboardStore {
  activeType: DashboardVisibleTypeEnum = DashboardVisibleTypeEnum.LIST;

  data: IHotkeyConfig = getInitConfig();

  constructor() {
    makeAutoObservable(this);
  }

  updateActiveType(next: DashboardVisibleTypeEnum) {
    this.activeType = next;
  }

  async createProfile(profile: IHotKeyProfileCreateItem) {
    const newProfile: IHotkeyProfileItem = {
      ...profile,
      id: nanoid(),
    };

    this.data.hotkeys.push(newProfile);

    await this.saveProfile();
  }

  async updateProfile(profile: IHotkeyProfileItem) {
    this.data.hotkeys = this.data.hotkeys.map((item) => {
      if (item.id === profile.id) {
        return profile;
      }

      return item;
    });

    await this.saveProfile();
  }

  /**
   * 刷新配置, 从文件中读取
   */
  async refreshProfile() {
    //
  }

  /**
   * 保存配置, 写入到文件中
   */
  async saveProfile() {
    await StoreServiceInst.updateConfig(this.data);
  }

  async deleteProfile(id: string) {
    this.data.hotkeys = this.data.hotkeys.filter((item) => item.id !== id);

    await this.saveProfile();
  }

  async sortProfile() {
    //
  }

  activeProfile(id: string) {
    //
  }
}
