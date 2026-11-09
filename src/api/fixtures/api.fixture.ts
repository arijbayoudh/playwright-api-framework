import { test as base, APIRequestContext } from '@playwright/test';
export { expect } from '@playwright/test';
import { PostsService } from '../services/postsService';
import { UsersService } from '../services/usersService';
import { CommentsService } from '../services/commentsService';
import { TodosService } from '../services/todosService';

type TestFixtures = {
  posts: PostsService;
  users: UsersService;
  comments: CommentsService;
  todos: TodosService;
};

export const test = base.extend<TestFixtures>({
posts: async ({ request }, use) => {
    await use(new PostsService(request));
  },

users: async ({ request }, use) => {
    await use(new UsersService(request));
  },
  
comments: async ({ request }, use) => {
    await use(new CommentsService(request));
  },
  
todos: async ({ request }, use) => {
    await use(new TodosService(request));
  },  
  
});