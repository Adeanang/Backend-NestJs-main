
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { TrasformResponseInterceptor } from './interceptors.interceptor.js';

describe('TrasformResponseInterceptor', () => {
  it('should be defined', () => {
    assert.ok(new TrasformResponseInterceptor());
  });
});
