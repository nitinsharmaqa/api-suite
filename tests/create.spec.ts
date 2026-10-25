import { test, expect } from '@playwright/test';

test('create booking returns an id', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: 'Nitin',
      lastname: 'Sharma',
      totalprice: 100,
      depositpaid: true,
      bookingdates: {
        checkin: '2026-11-01',
        checkout: '2026-11-05',
      },
      additionalneeds: 'Breakfast',
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.bookingid).toBeTruthy();
});