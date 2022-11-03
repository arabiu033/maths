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
describe('Subtraction', () => {
​
  test('First', () => {
    expect(calculate({total: null, next: null, operation: null,}, '.')).toStrictEqual({total: null, next: '0.', operation: null});
  })
​
  test('Second', () => {
    expect(calculate({total: '10', next: null, operation: '-',}, '5')).toStrictEqual({total: '10', next: '5', operation: '-'});
  })
​
  test('Third', () => {
    expect(calculate({total: '50', next: '50', operation: '-',}, '=')).toStrictEqual({total: '0', next: null, operation: null});
  })
})

describe('Division', () => {
​
  test('First', () => {
    expect(calculate({total: null, next: null, operation: null,}, '%')).toStrictEqual({operation: '%'});
  })
​
  test('Second', () => {
    expect(calculate({total: 10, next: null, operation: '÷',}, '5')).toStrictEqual({total: 10, next: '5', operation: '÷'});
  })
​
  test('Third', () => {
    expect(calculate({total: '50', next: '50', operation: '÷',}, '=')).toStrictEqual({total: '1', next: null, operation: null});
  })
})

describe('Negation', () => {
​
  test('First', () => {
    expect(calculate({total: null, next: null, operation: null,}, '+/-')).toStrictEqual({});
  })
​
  test('Second', () => {
    expect(calculate({total: '10', next: '5', operation: '+',}, '+/-')).toStrictEqual({total: '10', next: '-5', operation: '+'});
  })
​
  test('Third', () => {
    expect(calculate({total: null, next: '50', operation: '+',}, '+/-')).toStrictEqual({total: null, next: '-50', operation: '+'});
  })
})

