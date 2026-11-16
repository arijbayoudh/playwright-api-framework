import { test, expect } from '../../../src/api/fixtures/api.fixture';
import { createCommentPositiveScenarios } from '../../../src/api/test-data/comments/createComment';
import { Logger } from '../../../src/api/utils/logger';

test.describe('POST /comments - Positive Scenarios', () => {
  for (const scenario of createCommentPositiveScenarios) {
    test(scenario.title, async ({ comments }) => {
      const response = await comments.create(scenario.payload);
      const json = await response.json();
      Logger.apiRequest('POST', '/comments', scenario.payload);
      Logger.apiResponse(response.status(), json);

      expect(response.status()).toBe(201);
      // the API returns what we sent + a new id
      expect(json).toMatchObject(scenario.payload);
      expect(json.id).toBeDefined();
    });
  }
});

test.describe('POST /comments - Edge cases', () => {

  // JSONPlaceholder does NOT validate the body: it accepts incomplete payloads.
  // This test documents the real behaviour of the API.
  test('Create comment with missing fields is still accepted (no validation on this API)', async ({ comments }) => {
    const response = await comments.create({ name: 'only name' });
    expect(response.status()).toBe(201);
  });

});
