import { FC } from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import './App.css';

const App: FC = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[260px] border-r border-grey-500">
        <MenuList>
          <MenuItem selected>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
        </MenuList>
      </div>
      <div className="flex-1 h-screen p-2">
        <p>Content</p>
      </div>
    </div>
  );
};

export default App;
