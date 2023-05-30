import React, { FC } from 'react';
import { IHotkeyProfileList } from '../../share/types';

type HotkeyListItemProps = {
  data: IHotkeyProfileList;
};

const HotkeyListItem: FC<HotkeyListItemProps> = ({ data }) => {
  return <div>HotkeyListItem</div>;
};

export default HotkeyListItem;
