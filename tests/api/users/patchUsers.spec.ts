import { test, expect } from '../../../src/api/fixtures/api.fixture';

test.describe('PATCH /users', () => {

  test('Patch name of a user', async ({ users }) => {
    const response = await users.patch(1, { name: 'Patched Name' });
    expect(response.status()).toBe(200);
  });

  test('Patch username of a user', async ({ users }) => {
    const response = await users.patch(1, { username: 'patcheduser' });
    expect(response.status()).toBe(200);
  });

  test('Patch email of a user', async ({ users }) => {
    const response = await users.patch(1, { email: 'patched@example.com' });
    expect(response.status()).toBe(200);
  });

  test('Patch multiple fields', async ({ users }) => {
    const response = await users.patch(1, { name: 'Multi', username: 'multiuser', email: 'multi@example.com' });
    expect(response.status()).toBe(200);
  });

});