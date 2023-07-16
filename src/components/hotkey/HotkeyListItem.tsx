import React, { FC } from 'react';
import { IHotkeyConfig, IHotkeyProfileItem } from '../../share/types';

type HotkeyListItemProps = {
  data: IHotkeyProfileItem[];
};

const HotkeyListItem: FC<HotkeyListItemProps> = ({ data }) => {
  return <div>HotkeyListItem</div>;
};

export default HotkeyListItem;
