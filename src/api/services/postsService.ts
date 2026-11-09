import { RestClient } from '../restClient';
import { POSTS } from '../endpoints';
import { APIRequestContext } from '@playwright/test';

export class PostsService {
  private client: RestClient;

  constructor(request: APIRequestContext) {
    this.client = new RestClient(request);
  }

  getAll() { 
    return this.client.get(POSTS); 
  }

  getById(id: number) { 
    return this.client.get(`${POSTS}/${id}`); 
  }

  create(body: object) { 
    return this.client.post(POSTS, body); 
  }

  update(id: number, body: object) { 
    return this.client.put(`${POSTS}/${id}`, body); 
  }

  patch(id: number, body: object) { 
    return this.client.patch(`${POSTS}/${id}`, body);
   }

  delete(id: number) { 
    return this.client.delete(`${POSTS}/${id}`); 
  }
}