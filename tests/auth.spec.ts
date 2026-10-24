import { test, expect } from '@playwrighttest';

test('auth returns a token', async ({ request }) = {
  const response = await request.post('httpsrestful-booker.herokuapp.comauth', {
    data {
      username 'admin',
      password 'password123',
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.token).toBeTruthy();
});