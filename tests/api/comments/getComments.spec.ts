import { test, expect } from '../../../src/api/fixtures/api.fixture';
import Ajv from 'ajv';
import schema from '../../../src/api/schemas/comments.schemas.json';

const ajv = new Ajv({ allErrors: true, strict: false });
const validate = ajv.compile(schema);

test.describe('GET /comments', () => {

  test('Get all comments', async ({ comments }) => {
    const response = await comments.getAll();
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(Array.isArray(json)).toBeTruthy();
    expect(json).toHaveLength(500);
  });

  test('Get all comments - first item respects the schema', async ({ comments }) => {
    const response = await comments.getAll();
    const json = await response.json();
    expect(validate(json[0]), JSON.stringify(validate.errors)).toBeTruthy();
  });

  test('Get comment by ID', async ({ comments }) => {
    const response = await comments.getById(1);
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.id).toBe(1);
    expect(validate(json), JSON.stringify(validate.errors)).toBeTruthy();
  });

  test('Get comment with invalid ID returns 404', async ({ comments }) => {
    const response = await comments.getById(9999);
    expect(response.status()).toBe(404);
  });

  test('Response headers contain content-type application/json', async ({ comments }) => {
    const response = await comments.getAll();
    expect(response.headers()['content-type']).toContain('application/json');
  });

});
