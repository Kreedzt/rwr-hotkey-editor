import React, { FC } from 'react';
import List from '@mui/material/List';
import { IHotkeyProfileItem } from '../../share/types';
import HotkeyConfigItem from './HotkeyConfigItem';

type HotkeyListProps = {
  data: IHotkeyProfileItem[];
  onActive: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const HotkeyConfigList: FC<HotkeyListProps> = ({
  data,
  onActive,
  onEdit,
  onDelete,
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
          />
        );
      })}
    </List>
  );
};

export default HotkeyConfigList;
