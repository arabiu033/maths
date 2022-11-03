import calculate from '../logic/calculate';
​
describe('Addition', () => {
​
  test('First', () => {
    expect(calculate({total: null, next: null, operation: null,}, 'AC')).toStrictEqual({total: null, next: null, operation: null});
  })
​
  test('Second', () => {
    expect(calculate({total: '50', next: null, operation: '+',}, '5')).toStrictEqual({total: '50', next: '5', operation: '+'});
  })
​
  test('Third', () => {
    expect(calculate({total: '50', next: '50', operation: '+',}, '=')).toStrictEqual({total: '100', next: null, operation: null});
  })
})
​
