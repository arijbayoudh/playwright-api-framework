import { test, expect } from '../../../src/api/fixtures/api.fixture';

test.describe('DELETE /todos', () => {

  test('Delete todo with valid ID', async ({ todos }) => {
    const response = await todos.delete(1);
    expect(response.status()).toBe(200);
  });

  test('Delete todo with invalid ID', async ({ todos }) => {
    const response = await todos.delete(9999);
    expect(response.status()).toBe(200);
  });

  test('Delete todo twice', async ({ todos }) => {
    await todos.delete(2);
    const response = await todos.delete(2);
    expect(response.status()).toBe(200);
  });

  // JSONPlaceholder is a FAKE API: the deletion is not really persisted,
  // so the resource is still returned afterwards (200, not 404).
  test('Delete todo then fetch it: still 200 (fake API)', async ({ todos }) => {
    await todos.delete(3);
    const response = await todos.getById(3);
    expect(response.status()).toBe(200);
  });

});
