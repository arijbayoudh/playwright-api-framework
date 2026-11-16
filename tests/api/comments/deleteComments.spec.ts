import { test, expect } from '../../../src/api/fixtures/api.fixture';

test.describe('DELETE /comments', () => {

  test('Delete comment with valid ID', async ({ comments }) => {
    const response = await comments.delete(1);
    expect(response.status()).toBe(200);
  });

  test('Delete comment with invalid ID', async ({ comments }) => {
    const response = await comments.delete(9999);
    expect(response.status()).toBe(200);
  });

  test('Delete comment twice', async ({ comments }) => {
    await comments.delete(2);
    const response = await comments.delete(2);
    expect(response.status()).toBe(200);
  });

  // JSONPlaceholder is a FAKE API: the deletion is not really persisted,
  // so the resource is still returned afterwards (200, not 404).
  test('Delete comment then fetch it: still 200 (fake API)', async ({ comments }) => {
    await comments.delete(3);
    const response = await comments.getById(3);
    expect(response.status()).toBe(200);
  });

});
