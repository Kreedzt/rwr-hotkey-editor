import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { MenuItem, MenuList } from '@fluentui/react-components';
import {
  bundleIcon,
  CutFilled,
  CutRegular,
  SettingsRegular,
  SettingsFilled,
} from '@fluentui/react-icons';
import './App.css';

const CutIcon = bundleIcon(CutFilled, CutRegular);
const SettingsIcon = bundleIcon(SettingsFilled, SettingsRegular);

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <MenuList>
        <MenuItem icon={<SettingsIcon />}>常规</MenuItem>
        <MenuItem icon={<CutIcon />}>Cut</MenuItem>
      </MenuList>
    </div>
  );
}

export default App;
