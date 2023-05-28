import { fs, path } from '@tauri-apps/api';

const RWR_CONFIG_FOLDER = 'Running with rifles';
const HOTKEYS_FILE = 'hotkeys.xml';

export class StoreService {
  static instance: StoreService;

  constructor() {
    //
  }

  static getSelf() {
    if (!this.instance) {
      this.instance = new StoreService();
    }

    return this.instance;
  }

  async getRWRConfigPath() {
    const configDir = await path.appConfigDir();
    const rwrConfigFolder = await path.join(
      configDir,
      '../',
      RWR_CONFIG_FOLDER
    );

    console.log('rwrConfigFolder', rwrConfigFolder);
    return rwrConfigFolder;
  }

  async getHotKeysPath() {
    const folder = await this.getRWRConfigPath();
    return path.join(folder, HOTKEYS_FILE);
  }

  async load() {
    // await this.getRWRConfigPath();
    const hotkeysFile = await this.getHotKeysPath();
    console.log('hotkeysFile', hotkeysFile);
  }

  async reset() {
    //
  }

  async update() {
    //
  }
}
