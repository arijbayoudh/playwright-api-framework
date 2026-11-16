import { test, expect } from '../../../src/api/fixtures/api.fixture';
import Ajv from 'ajv';
import schema from '../../../src/api/schemas/posts.schemas.json';

const ajv = new Ajv({ allErrors: true, strict: false });
const validate = ajv.compile(schema);

test.describe('GET /posts', () => {

  test('Get all posts', async ({ posts }) => {
    const response = await posts.getAll();
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(Array.isArray(json)).toBeTruthy();
    expect(json).toHaveLength(100);
  });

  test('Get all posts - first item respects the schema', async ({ posts }) => {
    const response = await posts.getAll();
    const json = await response.json();
    expect(validate(json[0]), JSON.stringify(validate.errors)).toBeTruthy();
  });

  test('Get post by ID', async ({ posts }) => {
    const response = await posts.getById(1);
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.id).toBe(1);
    expect(validate(json), JSON.stringify(validate.errors)).toBeTruthy();
  });

  test('Get post with invalid ID returns 404', async ({ posts }) => {
    const response = await posts.getById(9999);
    expect(response.status()).toBe(404);
  });

  test('Response headers contain content-type application/json', async ({ posts }) => {
    const response = await posts.getAll();
    expect(response.headers()['content-type']).toContain('application/json');
  });

});
