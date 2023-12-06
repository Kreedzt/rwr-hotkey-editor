import React, { FC } from 'react';
import { IHotkeyProfileItem } from '../../share/types';

type HotkeyListItemProps = {
  data: IHotkeyProfileItem;
};

const HotkeyConfigCard: FC<HotkeyListItemProps> = ({ data }) => {
  return (
    <div>
      HotkeyConfigCard: {data.id}: {data.title}
    </div>
  );
};

export default HotkeyConfigCard;
