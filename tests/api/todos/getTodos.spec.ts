import { test, expect } from '../../../src/api/fixtures/api.fixture';
import Ajv from 'ajv';
import schema from '../../../src/api/schemas/todo.schemas.json';

const ajv = new Ajv({ allErrors: true, strict: false });
const validate = ajv.compile(schema);

test.describe('GET /todos', () => {

  test('Get all todos', async ({ todos }) => {
    const response = await todos.getAll();
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(Array.isArray(json)).toBeTruthy();
    expect(json).toHaveLength(200);
  });

  test('Get all todos - first item respects the schema', async ({ todos }) => {
    const response = await todos.getAll();
    const json = await response.json();
    expect(validate(json[0]), JSON.stringify(validate.errors)).toBeTruthy();
  });

  test('Get todo by ID', async ({ todos }) => {
    const response = await todos.getById(1);
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.id).toBe(1);
    expect(validate(json), JSON.stringify(validate.errors)).toBeTruthy();
  });

  test('Get todo with invalid ID returns 404', async ({ todos }) => {
    const response = await todos.getById(9999);
    expect(response.status()).toBe(404);
  });

  test('Response headers contain content-type application/json', async ({ todos }) => {
    const response = await todos.getAll();
    expect(response.headers()['content-type']).toContain('application/json');
  });

});
