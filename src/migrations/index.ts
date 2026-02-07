import * as migration_20260207_160713 from './20260207_160713';

export const migrations = [
  {
    up: migration_20260207_160713.up,
    down: migration_20260207_160713.down,
    name: '20260207_160713'
  },
];
