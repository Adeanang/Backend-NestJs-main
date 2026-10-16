
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { LogMiddlewareMiddleware } from './log-middleware.middleware.js';

describe('LogMiddlewareMiddleware', () => {
  it('should be defined', () => {
    assert.ok(new LogMiddlewareMiddleware());
  });
});
