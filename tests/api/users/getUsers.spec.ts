import { test, expect } from '../../../src/api/fixtures/api.fixture';
import Ajv from 'ajv';
import schema from '../../../src/api/schemas/users.schemas.json';

const ajv = new Ajv();

test.describe('GET /users', () => {

  test('Get all users', async ({ users }) => {
    const response = await users.getAll();
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(Array.isArray(json)).toBeTruthy();
  });

  test('Get user by ID', async ({ users }) => {
    const response = await users.getById(1);
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(ajv.validate(schema, json)).toBeTruthy();
  });

  test('Get user with invalid ID returns 404', async ({ users }) => {
    const response = await users.getById(9999);
    expect(response.status()).toBe(404);
  });

  test('Response headers contain content-type application/json', async ({ users }) => {
    const response = await users.getAll();
    expect(response.headers()['content-type']).toContain('application/json');
  });

});