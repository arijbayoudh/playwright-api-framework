import { test, expect } from '../../../src/api/fixtures/api.fixture';

test.describe('DELETE /posts', () => {

  test('Delete post with valid ID', async ({ posts }) => {
    const response = await posts.delete(1);
    expect(response.status()).toBe(200);
  });

  test('Delete post with invalid ID', async ({ posts }) => {
    const response = await posts.delete(9999);
    expect(response.status()).toBe(200);
  });

  test('Delete post twice', async ({ posts }) => {
    await posts.delete(2);
    const response = await posts.delete(2);
    expect(response.status()).toBe(200);
  });

  // JSONPlaceholder is a FAKE API: the deletion is not really persisted,
  // so the resource is still returned afterwards (200, not 404).
  test('Delete post then fetch it: still 200 (fake API)', async ({ posts }) => {
    await posts.delete(3);
    const response = await posts.getById(3);
    expect(response.status()).toBe(200);
  });

});
