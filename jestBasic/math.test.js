const { add, minus, multi } = require('./math.js');

test('test add 3 + 4', () => {
  expect(add(3,4)).toBe(7);
})

test('test add 3 + 4', () => {
  expect(minus(3,4)).toBe(7);
})

test('test add 3 + 4', () => {
  expect(multi(3,4)).toBe(7);
})