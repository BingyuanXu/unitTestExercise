//const { add, minus, multi } = require('./math.js');
import {add, minus, multi} from "./math";
test('test add 3 + 4', () => {
  expect(add(3,4)).toBe(7);
})

test('test minus 3 + 4', () => {
  expect(minus(3,4)).toBe(-1);
})

test('test multi 3 + 4', () => {
  expect(multi(3,4)).toBe(12);
})