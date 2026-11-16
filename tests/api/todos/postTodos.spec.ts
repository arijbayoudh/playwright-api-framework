import { test, expect } from '../../../src/api/fixtures/api.fixture';
import { createTodoPositiveScenarios } from '../../../src/api/test-data/todos/createTodo';
import { Logger } from '../../../src/api/utils/logger';

test.describe('POST /todos - Positive Scenarios', () => {
  for (const scenario of createTodoPositiveScenarios) {
    test(scenario.title, async ({ todos }) => {
      const response = await todos.create(scenario.payload);
      const json = await response.json();
      Logger.apiRequest('POST', '/todos', scenario.payload);
      Logger.apiResponse(response.status(), json);

      expect(response.status()).toBe(201);
      // the API returns what we sent + a new id
      expect(json).toMatchObject(scenario.payload);
      expect(json.id).toBeDefined();
    });
  }
});

test.describe('POST /todos - Edge cases', () => {

  // JSONPlaceholder does NOT validate the body: it accepts incomplete payloads.
  // This test documents the real behaviour of the API.
  test('Create todo with missing fields is still accepted (no validation on this API)', async ({ todos }) => {
    const response = await todos.create({ title: 'only title' });
    expect(response.status()).toBe(201);
  });

});
