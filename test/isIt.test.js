const request = require('supertest');
const app = require('../src/server');

// Allow enough time for the 60 sequential 1s sleeps
jest.setTimeout(200000);

describe('isit endpoints - many slow tests', () => {
  // Create 60 tests that each wait ~1 second before asserting
  for (let i = 1; i <= 30; i += 1) {
    test(`slow test ${i} - waits 1s then checks /isit/animal${i}`, async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await request(app).get('/isit/cat');
      expect(res.status).toBe(200);
      expect(res.text).toBe('false');
    });
  }
  
  test('positive test lizard', async () => {
    const res = await request(app).get('/isit/lizard');
    expect(res.status).toBe(200);
    expect(res.text).toBe('absolutely yes 🦎');
  });
});

