import { APIRequestContext } from '@playwright/test';

export class RestClient {
  constructor(private request: APIRequestContext) {}

  get(url: string) { 
    return this.request.get(url); 
  }

  post(url: string, body: object) {
    return this.request.post(url, { data: body }); 
  }

  put(url: string, body: object) { 
    return this.request.put(url, { data: body }); 
  }

  patch(url: string, body: object) { 
    return this.request.patch(url, { data: body }); 
  }

  delete(url: string) { 
    return this.request.delete(url); 
  }
}