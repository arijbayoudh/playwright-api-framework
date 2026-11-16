import { test, expect } from '../../../src/api/fixtures/api.fixture';
import { createPostPositiveScenarios } from '../../../src/api/test-data/posts/createPost';
import { Logger } from '../../../src/api/utils/logger';

test.describe('POST /posts - Positive Scenarios', () => {
  for (const scenario of createPostPositiveScenarios) {
    test(scenario.title, async ({ posts }) => {
      const response = await posts.create(scenario.payload);
      const json = await response.json();
      Logger.apiRequest('POST', '/posts', scenario.payload);
      Logger.apiResponse(response.status(), json);

      expect(response.status()).toBe(201);
      // the API returns what we sent + a new id
      expect(json).toMatchObject(scenario.payload);
      expect(json.id).toBeDefined();
    });
  }
});

test.describe('POST /posts - Edge cases', () => {

  // JSONPlaceholder does NOT validate the body: it accepts incomplete payloads.
  // This test documents the real behaviour of the API.
  test('Create post with missing fields is still accepted (no validation on this API)', async ({ posts }) => {
    const response = await posts.create({ title: 'only title' });
    expect(response.status()).toBe(201);
  });

});
