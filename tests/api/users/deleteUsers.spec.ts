import { test, expect } from '../../../src/api/fixtures/api.fixture';

test.describe('DELETE /users', () => {

  test('Delete user with valid ID', async ({ users }) => {
    const response = await users.delete(1);
    expect(response.status()).toBe(200);
  });

  test('Delete user with invalid ID', async ({ users }) => {
    const response = await users.delete(9999);
    expect(response.status()).toBe(200);
  });

  test('Delete user twice', async ({ users }) => {
    await users.delete(2);
    const response = await users.delete(2);
    expect(response.status()).toBe(200);
  });

  test('Delete user and verify fetch returns 404', async ({ users }) => {
    await users.delete(3);
    const response = await users.getById(3);
    expect(response.status()).toBe(404);
  });

});