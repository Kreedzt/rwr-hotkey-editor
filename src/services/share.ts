import { clipboard } from '@tauri-apps/api';
import { IHotkeyProfileItem, IShareProfileItem } from '../share/types';
import {
  transformProfileConfig2ShareConfig,
  transformShareConfig2ProfileConfig,
  validateProfileShareConfig,
} from '../share/utils';

export class ShareService {
  static instance: ShareService;

  constructor() {
    //
  }

  static getSelf() {
    if (!this.instance) {
      this.instance = new ShareService();
    }

    return this.instance;
  }

  async share(profile: IHotkeyProfileItem) {
    const shareText = transformProfileConfig2ShareConfig(profile);
    await clipboard.writeText(JSON.stringify(shareText));
  }

  async read(): Promise<
    | {
        isValid: false;
      }
    | {
        isValid: true;
        profile: IHotkeyProfileItem;
      }
  > {
    const text = await clipboard.readText();

    if (!text) {
      return {
        isValid: false,
      };
    }

    const isValid = validateProfileShareConfig(text);

    if (!isValid) {
      return {
        isValid: false,
      };
    }

    return {
      isValid: true,
      profile: transformShareConfig2ProfileConfig(
        JSON.parse(text) as IShareProfileItem
      ),
    };
  }
}

export const ShareServiceInst = ShareService.getSelf();
