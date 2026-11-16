export type CreateCommentScenario = {
  title: string;
  payload: { postId: number; name: string; email: string; body: string };
};

export const createCommentPositiveScenarios: CreateCommentScenario[] = [
  {
    title: 'Valid comment',
    payload: { postId: 1, name: 'Nice post', email: 'tester@example.com', body: 'Great content' },
  },
  {
    title: 'Long comment body',
    payload: { postId: 2, name: 'Long', email: 'long@example.com', body: 'z'.repeat(1000) },
  },
  {
    title: 'Special characters in name',
    payload: { postId: 3, name: 'Spec !@# é', email: 'spec@example.com', body: 'special' },
  },
];
