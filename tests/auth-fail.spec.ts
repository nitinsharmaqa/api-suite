import { test, expect } from '@playwright/test';

test('wrong password does not return a token', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      username: 'admin',
      password: 'wrong-password',
    },
  });

  const body = await response.json();
  expect(body.token).toBeFalsy();
  expect(body.reason).toBe('Bad credentials');
});