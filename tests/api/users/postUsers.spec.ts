import { test, expect } from '../../../src/api/fixtures/api.fixture';
import Ajv from 'ajv';
import schema from '../../../src/api/schemas/users.schemas.json';
import { createUserPositiveScenarios } from '../../../src/api/test-data/users/createUser.positive';
import { createUserNegativeScenarios } from '../../../src/api/test-data/users/createUser.negative';
import { Logger } from '../../../src/api/utils/logger';
import { Helpers } from '../../../src/api/utils/helpers';

const ajv = new Ajv({ allErrors: true, strict: false });

test.describe('POST /users - Positive Scenarios', () => {
  for (const scenario of createUserPositiveScenarios) {
    test(scenario.title, async ({ users }) => {
      const response = await users.create(scenario.payload);
      const json = await response.json();
      Logger.apiRequest('POST', '/users', scenario.payload);
      Logger.apiResponse(response.status(), await response.json());
      Logger.apiResponse(response.status(), json);
      expect(response.status()).toBe(201);
    });
  }
});

test.describe('POST /users - Negative Scenarios (QA Checks)', () => {
  for (const scenario of createUserNegativeScenarios) {
    test(scenario.title, async ({ users }) => {
      const response = await users.create(scenario.payload);
      Logger.apiRequest('POST', '/users', scenario.payload);
      Logger.apiResponse(response.status(), await response.json());
      if (!scenario.payload.email || !scenario.payload.email.includes('@')) {
        expect(scenario.expectedError).toContain('Email');
      }
    });
  }

  test('Create user with invalid email', async ({ users }) => {
    const response = await users.create({ name: 'Test', username: 'test', email: 'bademail' });
    expect(response.status()).toBe(400);
    const json = await response.json();
    expect(json.error).toBe('Invalid email');
  });

});