export type CreateTodoScenario = {
  title: string;
  payload: { userId: number; title: string; completed: boolean };
};

export const createTodoPositiveScenarios: CreateTodoScenario[] = [
  {
    title: 'Todo not completed',
    payload: { userId: 1, title: 'Learn Playwright', completed: false },
  },
  {
    title: 'Todo completed',
    payload: { userId: 1, title: 'Learn TypeScript', completed: true },
  },
  {
    title: 'Long todo title',
    payload: { userId: 2, title: 't'.repeat(200), completed: false },
  },
];
