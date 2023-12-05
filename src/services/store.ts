import { fs, path, invoke } from '@tauri-apps/api';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import {
  IHotkeyConfig,
  IHotkeyProfileItem,
  IHotkeyRawConfig,
} from '../share/types';
import {
  getInitConfig,
  getInitRawConfig,
  transformProfileConfig2GameConfig,
} from '../share/utils';

const RWR_CONFIG_FOLDER = 'Running with rifles';
const RWR_HOTKEYS_FILE = 'hotkeys.xml';

export const CONFIG_FILE_NAME = 'config.json';

export class StoreService {
  static instance: StoreService;

  configPath: string = '';

  constructor() {
    //
  }

  static getSelf() {
    if (!this.instance) {
      this.instance = new StoreService();
    }

    return this.instance;
  }

  async getConfigPath(): Promise<string> {
    if (!this.configPath) {
      this.configPath = await path.join(
        await path.appConfigDir(),
        CONFIG_FILE_NAME
      );
    }
    return this.configPath;
  }

  /**
   * 初始化配置文件
   */
  async initConfigFile() {
    const touchFile = await this.getConfigPath();

    const sep = path.sep;

    const pathRoute = touchFile.split(sep);

    const lastFolder = pathRoute.slice(0, -1);
    const lastFolderRoute = lastFolder.join(sep);

    if (!(await fs.exists(lastFolderRoute))) {
      await fs.createDir(lastFolderRoute);
      console.log('initConfigFile: create default folder success');
    }

    if (!(await fs.exists(touchFile))) {
      await this.resetConfig();
    }
  }

  async getRWRConfigPath() {
    const configDir = await path.appConfigDir();
    const rwrConfigFolder = await path.join(
      configDir,
      '../',
      RWR_CONFIG_FOLDER
    );

    return rwrConfigFolder;
  }

  async getHotKeysPath() {
    const folder = await this.getRWRConfigPath();
    return path.join(folder, RWR_HOTKEYS_FILE);
  }

  /**
   * 从 RWR 配置文件中读取热键配置
   */
  async loadRaw(): Promise<IHotkeyRawConfig> {
    const hotkeysFilePath = await this.getHotKeysPath();
    if (
      !(await invoke('check_file_exists', {
        path: hotkeysFilePath,
      }))
    ) {
      console.log('hotkeysFilePath not exists');
      return getInitRawConfig();
    }
    const xmlString = (await invoke('read_file_to_string', {
      path: hotkeysFilePath,
    })) as string;
    const parser = new XMLParser({
      ignoreAttributes: false,
    });
    const res = parser.parse(xmlString) as IHotkeyRawConfig;

    return res;
  }

  /**
   * 重置 RWR 配置文件中的热键配置
   */
  async resetRaw() {
    const builder = new XMLBuilder({
      ignoreAttributes: false,
    });

    const xmlData = builder.build(getInitRawConfig());

    await invoke('write_string_to_file', {
      path: await this.getHotKeysPath(),
      content: xmlData,
    });
  }

  /**
   * 更新 RWR 配置文件中的热键配置
   * @param data
   */
  async updateRaw(data: IHotkeyRawConfig) {
    const builder = new XMLBuilder({
      ignoreAttributes: false,
    });

    const xmlData = builder.build(data);

    await invoke('write_string_to_file', {
      path: await this.getHotKeysPath(),
      content: xmlData,
    });
  }

  async writeConfig2Game(data: IHotkeyProfileItem) {
    const raw = transformProfileConfig2GameConfig(data);
    await this.updateRaw(raw);
  }

  /**
   * 更新配置文件中的配置
   */
  async updateConfig(config: IHotkeyConfig) {
    await fs.writeTextFile(await this.getConfigPath(), JSON.stringify(config));
  }

  /**
   * 重置配置文件中的配置
   */
  async resetConfig() {
    await fs.writeTextFile(
      await this.getConfigPath(),
      JSON.stringify(getInitConfig())
    );
  }

  /**
   * 从配置文件中读取配置
   */
  async loadConfig(): Promise<IHotkeyConfig> {
    const jsonStr = await fs.readTextFile(await this.getConfigPath());
    const config = JSON.parse(jsonStr) as IHotkeyConfig;

    return config;
  }
}

export const StoreServiceInst = StoreService.getSelf();
