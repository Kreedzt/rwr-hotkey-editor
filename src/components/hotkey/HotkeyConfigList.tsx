import React, { FC } from 'react';
import { IHotkeyConfigItem } from '../../share/types';
import HotkeyConfigItem from './HotkeyConfigItem';

type HotkeyListProps = {
  data: IHotkeyConfigItem[];
};

const HotkeyConfigList: FC<HotkeyListProps> = ({ data }) => {
  return (
    <div>
      <p>HKList</p>
      {data.map((d) => {
        return <HotkeyConfigItem key={d.id} data={d} />;
      })}
    </div>
  );
};

export default HotkeyConfigList;
