import React, { FC, useCallback, useState } from 'react';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/mui';
import Box from '@mui/material/Box';
import HotkeyConfigList from '../../components/hotkey/HotkeyConfigList';
import { IHotkeyConfigItem, IHotkeyProfileItem } from '../../share/types';

type HotkeyProfileFormProps = {
  item: IHotkeyProfileItem;
};

type FormData = Omit<IHotkeyProfileItem, 'id'>;

const schema: RJSFSchema = {
  title: '',
  type: 'object',
  required: ['title', 'config'],
  properties: {
    title: {
      type: 'string',
      title: '标题'
    },
    config: {
      type: 'array',
      items: {
        type: 'object',
        required: ['value'],
        properties: {
          value: {
            type: 'string',
            'title': '内容'
          },
          label: {
            type: 'string',
            title: '备注'
          },
        }
      }
    }
  }
};

const uiSchema: UiSchema = {
  'ui:globalOptions': {
    /* si */
  }
};

const HotkeyProfileForm: FC<HotkeyProfileFormProps> = ({ item }) => {
  const onSubmit = useCallback((v: FormData) => {
    console.log('onSubmit', v);
  }, []);

  return (
    <Box p={2}>
      <Form
        schema={schema}
        validator={validator}
        formData={item}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

export default HotkeyProfileForm;
