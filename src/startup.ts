import { initConfig } from './store/config';
import { initAppInfo } from './store/app';

export const runApp = () => {
    // 初始化配置
    initConfig();

    // 初始化应用信息
    initAppInfo();
}
