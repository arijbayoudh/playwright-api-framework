import { APIRequestContext } from '@playwright/test';
import { COMMENTS } from '../endpoints';
import { RestClient } from '../restClient';

export class CommentsService {
  private client: RestClient;

  constructor(request: APIRequestContext) {
    this.client = new RestClient(request);
  }

  getAll() {
    return this.client.get(COMMENTS);
  }

  getById(id: number) {
    return this.client.get(`${COMMENTS}/${id}`);
  }

  create(body: object) {
    return this.client.post(COMMENTS, body);
  }

  update(id: number, body: object) {
    return this.client.put(`${COMMENTS}/${id}`, body);
  }

  patch(id: number, body: object) {
    return this.client.patch(`${COMMENTS}/${id}`, body);
  }

  delete(id: number) {
    return this.client.delete(`${COMMENTS}/${id}`);
  }
}