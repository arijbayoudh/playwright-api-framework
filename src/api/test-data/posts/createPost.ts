export type CreatePostScenario = {
  title: string;
  payload: { title: string; body: string; userId: number };
};

export const createPostPositiveScenarios: CreatePostScenario[] = [
  {
    title: 'Valid post',
    payload: { title: 'foo', body: 'bar', userId: 1 },
  },
  {
    title: 'Long title and body',
    payload: { title: 'x'.repeat(200), body: 'y'.repeat(1000), userId: 2 },
  },
  {
    title: 'Special characters in title',
    payload: { title: 'Hello !@#$%^&*() é à ç', body: 'special', userId: 3 },
  },
];