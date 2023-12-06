import { it, describe, expect } from 'vitest';
import {
  transformProfileConfig2GameConfig,
  getInitProfile,
  transformProfileConfig2ShareConfig,
  validateProfileShareConfig,
  transformShareConfig2ProfileConfig,
} from './utils';
import { IShareProfileItem } from './types';

describe('utils: transformProfileConfig2GameConfig', () => {
  it.concurrent('empty profile', () => {
    const profile = getInitProfile();
    profile.config = [];

    const result = transformProfileConfig2GameConfig(profile);

    expect(result).toEqual({
      hotkeys: {
        hotkey: [],
      },
    });
  });

  it.concurrent('init profile', () => {
    const profile = getInitProfile();

    const result = transformProfileConfig2GameConfig(profile);

    expect(result).toEqual({
      hotkeys: {
        hotkey: [
          {
            '@_index': '0',
            '@_text': profile.config[0].value,
            '@_comment': profile.config[0].label,
          },
        ],
      },
    });
  });
});

describe('utils: transformProfileConfig2ShareConfig', () => {
  it.concurrent('empty profile', () => {
    const profile = getInitProfile();
    profile.config = [];

    const result = transformProfileConfig2ShareConfig(profile);

    expect(result).toEqual({
      type: 'profile',
      value: {
        title: profile.title,
        config: [],
      },
    });
  });

  it.concurrent('init profile', () => {
    const profile = getInitProfile();

    const result = transformProfileConfig2ShareConfig(profile);

    expect(result).toEqual({
      type: 'profile',
      value: {
        title: profile.title,
        config: profile.config,
      },
    });
  });
});

describe('utils: validateProfileShareConfig', () => {
  it.concurrent('empty string', () => {
    const result = validateProfileShareConfig('');

    expect(result).toBe(false);
  });

  it.concurrent('empty json string', () => {
    const result = validateProfileShareConfig('{}');

    expect(result).toBe(false);
  });

  it.concurrent('empty json array', () => {
    const result = validateProfileShareConfig('[]');

    expect(result).toBe(false);
  });

  it.concurrent('empty share config value', () => {
    const profile: IShareProfileItem = {
      type: 'profile',
      value: {
        title: '',
        config: [],
      },
    };
    const result = validateProfileShareConfig(JSON.stringify(profile));

    expect(result).toBe(true);
  });
});

describe('utils: transformShareConfig2ProfileConfig', () => {
  it.concurrent('empty share config value', () => {
    const profile: IShareProfileItem = {
      type: 'profile',
      value: {
        title: '',
        config: [],
      },
    };
    const result = transformShareConfig2ProfileConfig(profile);

    expect(result).toEqual({
      id: expect.any(String),
      title: '',
      config: [],
    });
  });

  it.concurrent('init share config value', () => {
    const profile: IShareProfileItem = {
      type: 'profile',
      value: {
        title: 'test',
        config: [
          {
            label: 'test',
            value: 'test',
          },
        ],
      },
    };

    const result = transformShareConfig2ProfileConfig(profile);

    expect(result).toEqual({
      id: expect.any(String),
      title: 'test',
      config: [
        {
          label: 'test',
          value: 'test',
        },
      ],
    });
  });
});
