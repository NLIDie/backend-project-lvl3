// @ts-check

import { test, expect, describe } from '@jest/globals';
// import path from 'path';
// import fs from 'fs';

import loadPage from '../src/page-loader';

// const getFixturePath = (filename) => path.join(process.cwd(), '..', '__fixtures__', filename);
// const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

describe('pageLoader', () => {
  test('loadPage', () => {
    expect(loadPage()).toBe(undefined);
  });
});
