import { fs, path, invoke } from '@tauri-apps/api';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import { IHotkeyConfig, IHotkeyRawConfig } from '../share/types';
import {getInitConfig, getInitRawConfig} from "../share/utils";

const RWR_CONFIG_FOLDER = 'Running with rifles';
const RWR_HOTKEYS_FILE = 'hotkeys.xml';

export const CONFIG_FILE_NAME = 'config.json';

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

  /**
   * 更新配置文件中的配置
   */
  async updateConfig(config: IHotkeyConfig) {
    await fs.writeTextFile(
      await path.join(await path.appConfigDir(), CONFIG_FILE_NAME),
      JSON.stringify(config)
    );
  }

  /**
   * 重置配置文件中的配置
   */
  async resetConfig() {
    await fs.writeTextFile(
      await path.join(await path.appConfigDir(), CONFIG_FILE_NAME),
      JSON.stringify(getInitConfig())
    );
  }

  /**
   * 从配置文件中读取配置
   */
  async loadConfig(): Promise<IHotkeyConfig> {
    const jsonStr = await fs.readTextFile(
      await path.join(await path.appConfigDir(), CONFIG_FILE_NAME)
    );
    const config = JSON.parse(jsonStr) as IHotkeyConfig;

    return config;
  }
}

export const StoreServiceInst = StoreService.getSelf();
