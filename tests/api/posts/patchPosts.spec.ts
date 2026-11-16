import { test, expect } from '../../../src/api/fixtures/api.fixture';

test.describe('PATCH /posts', () => {

  test('Patch title of a post', async ({ posts }) => {
    const response = await posts.patch(1, { title: 'Patched title' });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.title).toBe('Patched title');
  });

  test('Patch body of a post', async ({ posts }) => {
    const response = await posts.patch(1, { body: 'Patched body' });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.body).toBe('Patched body');
  });

  test('Patch multiple fields', async ({ posts }) => {
    const body = { title: 'Multi title', body: 'Multi body' };
    const response = await posts.patch(1, body);
    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject(body);
  });

});
