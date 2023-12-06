import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { IHotkeyProfileItem } from '../../share/types';

type HotkeyListItemProps = {
  data: IHotkeyProfileItem;
  onActive: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const HotkeyConfigItem: FC<HotkeyListItemProps> = ({
  data,
  onActive,
  onEdit,
  onDelete,
}) => {
  return (
    <ListItem
      secondaryAction={
        <Box
          sx={{
            display: 'flex',
            columnGap: 2,
          }}
        >
          <Tooltip title="应用">
            <IconButton
              edge="end"
              aria-label="active"
              onClick={() => onActive(data.id)}
            >
              <ToggleOffIcon />
            {/* <ToggleOnIcon /> */}
            </IconButton>
          </Tooltip>

          <Tooltip title="编辑">
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => onEdit(data.id)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="删除">
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDelete(data.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      }
    >
      <ListItemText
        primary={data.title}
        secondary={`id: ${data.id}`}
      ></ListItemText>
    </ListItem>
  );
};

export default HotkeyConfigItem;
