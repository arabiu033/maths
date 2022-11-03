import operate from '../logic/operate';

test('+', () => {
  expect(operate('5', '5', '+')).toBe('10');
});

test('-', () => {
  expect(operate('5', '5', '-')).toBe('0');
});

test('/', () => {
  expect(operate('5', '5', '÷')).toBe('1');
});

test('x', () => {
  expect(operate('5', '5', 'x')).toBe('25');
});
