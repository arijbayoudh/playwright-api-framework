export type CreateUserScenario = {
  title: string;
  payload: any;
  shouldValidateSchema?: boolean;
};

export const createUserPositiveScenarios: CreateUserScenario[] = [
  {
    title: 'Valid user',
    payload: { name: 'John Doe', username: 'jdoe', email: 'john@example.com' },
    shouldValidateSchema: true,
  },
  {
    title: 'Long name',
    payload: { name: 'x'.repeat(100), username: 'longuser', email: 'long@example.com' },
    shouldValidateSchema: true,
  },
  {
    title: 'Special characters in username',
    payload: { name: 'Spec Char', username: 'user!@#', email: 'spec@example.com' },
    shouldValidateSchema: true,
  }
];