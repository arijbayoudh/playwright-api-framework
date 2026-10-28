import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html'], ['line']],
  use: {
     baseURL: 'https://jsonplaceholder.typicode.com/',
  },
  
});
