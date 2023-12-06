import React, { FC } from 'react';
import List from '@mui/material/List';
import { IHotkeyProfileItem } from '../../share/types';
import HotkeyConfigItem from './HotkeyConfigItem';

type TEventCallback = (id: string) => void;

type HotkeyListProps = {
  data: IHotkeyProfileItem[];
  onActive: TEventCallback;
  onEdit: TEventCallback;
  onDelete: TEventCallback;
  onShare: TEventCallback;
};

const HotkeyConfigList: FC<HotkeyListProps> = ({
  data,
  onActive,
  onEdit,
  onDelete,
  onShare,
}) => {
  return (
    <List dense={true}>
      {data.map((d) => {
        return (
          <HotkeyConfigItem
            key={d.id}
            data={d}
            onActive={onActive}
            onEdit={onEdit}
            onDelete={onDelete}
            onShare={onShare}
          />
        );
      })}
    </List>
  );
};

export default HotkeyConfigList;
