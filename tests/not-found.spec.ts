import { test, expect } from '@playwright/test';

test('unknown booking returns 404', async ({ request }) => {
  const response = await request.get('https://restful-booker.herokuapp.com/booking/999999999');
  expect(response.status()).toBe(404);
});
