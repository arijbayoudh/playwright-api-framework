import { test, expect } from '../../../src/api/fixtures/api.fixture';

test.describe('PATCH /comments', () => {

  test('Patch name of a comment', async ({ comments }) => {
    const response = await comments.patch(1, { name: 'Patched name' });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.name).toBe('Patched name');
  });

  test('Patch body of a comment', async ({ comments }) => {
    const response = await comments.patch(1, { body: 'Patched body' });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.body).toBe('Patched body');
  });

  test('Patch multiple fields', async ({ comments }) => {
    const body = { name: 'Multi name', body: 'Multi body' };
    const response = await comments.patch(1, body);
    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject(body);
  });

});
