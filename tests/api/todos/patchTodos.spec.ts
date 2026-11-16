import { test, expect } from '../../../src/api/fixtures/api.fixture';

test.describe('PATCH /todos', () => {

  test('Patch title of a todo', async ({ todos }) => {
    const response = await todos.patch(1, { title: 'Patched title' });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.title).toBe('Patched title');
  });

  test('Patch completed of a todo', async ({ todos }) => {
    const response = await todos.patch(1, { completed: true });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.completed).toBe(true);
  });

  test('Patch multiple fields', async ({ todos }) => {
    const body = { title: 'Multi title', completed: true };
    const response = await todos.patch(1, body);
    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject(body);
  });

});
