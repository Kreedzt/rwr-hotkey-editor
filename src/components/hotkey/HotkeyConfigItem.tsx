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
import ShareIcon from '@mui/icons-material/Share';
import { IHotkeyProfileItem } from '../../share/types';

type TEventCallback = (id: string) => void;

type HotkeyListItemProps = {
  data: IHotkeyProfileItem;
  onActive: TEventCallback;
  onEdit: TEventCallback;
  onDelete: TEventCallback;
  onShare: TEventCallback;
};

const HotkeyConfigItem: FC<HotkeyListItemProps> = ({
  data,
  onActive,
  onEdit,
  onDelete,
  onShare,
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

          <Tooltip title="分享">
            <IconButton
              edge="end"
              aria-label="share"
              onClick={() => onShare(data.id)}
            >
              <ShareIcon />
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
