import { it, describe, expect } from 'vitest';
import { transformProfileConfig2GameConfig, getInitProfile } from './utils';

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
