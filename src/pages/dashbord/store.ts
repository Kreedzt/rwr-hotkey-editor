import { makeAutoObservable } from 'mobx';
import { DashboardVisibleTypeEnum } from './enums';
import { IHotkeyProfileList } from '../../share/types';

export class DashboardStore {
  activeType: DashboardVisibleTypeEnum = DashboardVisibleTypeEnum.LIST;

  dataList: IHotkeyProfileList = [];

  constructor() {
    makeAutoObservable(this);
  }

  updateActiveType(next: DashboardVisibleTypeEnum) {
    this.activeType = next;
  }

  async createProfile() {
    //
  }

  async updateProfile() {
    //
  }

  async refreshProfile() {
    //
  }

  async deleteProfile(id: string) {
    //
  }

  async sortProfile() {
    //
  }

  async activeProfile() {
    //
  }
}
