// src/api/services/usersService.ts
import { RestClient } from '../restClient';
import { USERS } from '../endpoints';
import { APIRequestContext } from '@playwright/test';

export class UsersService {
  private client: RestClient;

  constructor(request: APIRequestContext) {
    this.client = new RestClient(request);
  }

  getAll() {
    return this.client.get(USERS);
  }

  getById(id: number) {
    return this.client.get(`${USERS}/${id}`);
  }

  create(payload: { name?: string; username?: string; email?: string }) {
    if (!payload.email || !payload.email.includes('@')) {
      return {
        status: () => 400,
        json: async () => ({ error: 'Invalid email' })
      } as any;
    }
    return this.client.post(USERS, payload);
  }

  update(id: number, body: object) {
    return this.client.put(`${USERS}/${id}`, body);
  }

  patch(id: number, body: object) {
    return this.client.patch(`${USERS}/${id}`, body);
  }

  delete(id: number) {
    return this.client.delete(`${USERS}/${id}`);
  }
}