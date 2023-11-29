import React, { FC, useCallback, useState } from 'react';
import { RJSFSchema, UiSchema, RegistryFieldsType, FieldProps } from '@rjsf/utils';
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
  type: 'object',
  required: ['title', 'config'],
  properties: {
    id: {
      type: 'string',
      title: 'ID'
    },
    title: {
      type: 'string',
      title: '标题'
    },
    config: {
      type: 'array',
      title: '热键集列表',
      minItems: 1,
      maxItems: 10,
      items: {
        type: 'object',
        required: ['value'],
        title: '热键',
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
  id: {
    'ui:widget': 'hidden'
  },
};

const CustomArraySchemaField: FC<FieldProps> = (props) => {
  const { index, registry, schema } = props;
  const { SchemaField } = registry.fields;

  const title = `${schema.title} ${index + 1}`;

  const mergedSchema = {
    ...schema,
    title
  };

  return <SchemaField {...props} schema={mergedSchema} />;
}

const fields: RegistryFieldsType = {
  ArraySchemaField: CustomArraySchemaField
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
        fields={fields}
        onSubmit={({ formData }) => onSubmit(formData)}
      />
    </Box>
  );
};

export default HotkeyProfileForm;
