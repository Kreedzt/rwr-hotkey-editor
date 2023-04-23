import { useCallback, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import {
  MenuCheckedValueChangeData,
  MenuCheckedValueChangeEvent,
  MenuItem,
  MenuList,
} from '@fluentui/react-components';
import {
  bundleIcon,
  HomeRegular,
  HomeFilled,
  SettingsRegular,
  SettingsFilled,
  EditSettingsRegular,
  EditSettingsFilled,
} from '@fluentui/react-icons';
import './App.css';

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const SettingsIcon = bundleIcon(SettingsFilled, SettingsRegular);
const EditSettingsIcon = bundleIcon(EditSettingsFilled, EditSettingsRegular);

function App() {
  const [activeKey, setActiveKey] = useState<Record<string, string[]>>({});

  const onMenuClick = useCallback(
    (e: MenuCheckedValueChangeEvent, data: MenuCheckedValueChangeData) => {
      console.log('e', e, 'data', data);
      setActiveKey((prev) => ({
        ...prev,
        [data.name]: data.checkedItems,
      }));
    },
    []
  );

  return (
    <div className="w-screen h-screen flex">
      <MenuList
        className="w-[200px] h-screen"
        checkedValues={activeKey}
        onCheckedValueChange={onMenuClick}
      >
        <MenuItem icon={<HomeIcon />}>主页</MenuItem>
        <MenuItem icon={<EditSettingsIcon />}>编辑热键</MenuItem>
        <MenuItem icon={<SettingsIcon />}>常规</MenuItem>
      </MenuList>
      <div className="flex-1 h-screen">Content</div>
    </div>
  );
}

export default App;
