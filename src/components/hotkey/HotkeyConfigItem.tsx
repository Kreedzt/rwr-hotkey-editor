import React, { FC } from 'react';
import { IHotkeyConfigItem } from '../../share/types';

type HotkeyListItemProps = {
  data: IHotkeyConfigItem;
};

const HotkeyConfigItem: FC<HotkeyListItemProps> = ({ data }) => {
  return (
    <div>
      HotkeyListItem: {data.label}: {data.value}
    </div>
  );
};

export default HotkeyConfigItem;
