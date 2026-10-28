export type CreateUserNegativeScenario = {
  title: string;
  payload: any;
  expectedError: string;
};

export const createUserNegativeScenarios: CreateUserNegativeScenario[] = [
  {
    title: 'Missing email',
    payload: { name: 'Jane Doe', username: 'jane' },
    expectedError: 'Email is required'
  },
  {
    title: 'Invalid email format',
    payload: { name: 'Invalid Email', username: 'invuser', email: 'not-an-email' },
    expectedError: 'Email format is invalid'
  }
];