import { pluralize } from './index';

describe('pluralize - метод генерирует функцию, которая cклоненяет существительные', () => {
  test('Должен возвращать функцию ', () => {
    expect(typeof pluralize('', '', '')).toBe('function');
  });

  test('Функция, которая склоняет существительные всегда должна возвращать строку', () => {
    const plurolizeUndefined = pluralize(undefined, undefined, undefined);
    const plurolizeNull = pluralize(null, null, null);

    expect(plurolizeUndefined(1)).not.toBeUndefined();
    expect(plurolizeNull(1)).not.toBeNull();
    expect(plurolizeUndefined()).toBe('');
    expect(plurolizeNull()).toBe('');
    expect(pluralize()(1)).toBe('');
  });

  test('Должен склонять существительные по двум параметрам', () => {
    const one = 'договору';
    const two = 'договорам';
    const plurolizeContracts = pluralize(one, two);
    expect(plurolizeContracts(1)).toBe(one);
    expect(plurolizeContracts(2)).toBe(two);
    expect(plurolizeContracts(3)).toBe(two);
    expect(plurolizeContracts(4)).toBe(two);
    expect(plurolizeContracts(42)).toBe(two);
    expect(plurolizeContracts(5)).toBe(two);
    expect(plurolizeContracts(11)).toBe(two);
    expect(plurolizeContracts(101)).toBe(one);
  });

  test('Должен склонять существительные #1', () => {
    const one = 'договор';
    const two = 'договора';
    const five = 'договоров';

    const plurolizeContracts = pluralize(one, two, five);
    expect(plurolizeContracts(1)).toBe(one);
    expect(plurolizeContracts(2)).toBe(two);
    expect(plurolizeContracts(3)).toBe(two);
    expect(plurolizeContracts(4)).toBe(two);
    expect(plurolizeContracts(5)).toBe(five);
    expect(plurolizeContracts(5)).toBe(five);
  });

  test('Должен склонять существительные #2', () => {
    const one = 'договору';
    const two = 'договорам';
    const five = 'договорам';

    const plurolizeContracts = pluralize(one, two, five);
    expect(plurolizeContracts(1)).toBe(one);
    expect(plurolizeContracts(2)).toBe(two);
    expect(plurolizeContracts(3)).toBe(two);
    expect(plurolizeContracts(4)).toBe(two);
    expect(plurolizeContracts(5)).toBe(five);
    expect(plurolizeContracts(11)).toBe(five);
    expect(plurolizeContracts(101)).toBe(one);
  });

  test('Проверка с 0', () => {
    const one = 'тысяча';
    const two = 'тысячи';
    const five = 'тысяч';

    const plurolizeBalance = pluralize(one, two, five);
    expect(plurolizeBalance(0)).toBe(five);
  });

  test('Проверка с отрицательными числами', () => {
    const one = 'тысяча';
    const two = 'тысячи';
    const five = 'тысяч';

    const plurolizeBalance = pluralize(one, two, five);
    expect(plurolizeBalance(-1)).toBe(one);
    expect(plurolizeBalance(-2)).toBe(two);
    expect(plurolizeBalance(-3)).toBe(two);
    expect(plurolizeBalance(-4)).toBe(two);
    expect(plurolizeBalance(-5)).toBe(five);
    expect(plurolizeBalance(-11)).toBe(five);
    expect(plurolizeBalance(-101)).toBe(one);
  });

  test('Проверка на больших числах', () => {
    const one = 'договор';
    const two = 'договора';
    const five = 'договоров';

    const plurolizeContracts = pluralize(one, two, five);
    expect(plurolizeContracts(1)).toBe(one);
    expect(plurolizeContracts(2)).toBe(two);
    expect(plurolizeContracts(3)).toBe(two);
    expect(plurolizeContracts(4)).toBe(two);
    expect(plurolizeContracts(5)).toBe(five);
    expect(plurolizeContracts(6)).toBe(five);
    expect(plurolizeContracts(7)).toBe(five);
    expect(plurolizeContracts(8)).toBe(five);
    expect(plurolizeContracts(9)).toBe(five);
    expect(plurolizeContracts(10)).toBe(five);
    expect(plurolizeContracts(11)).toBe(five);
    expect(plurolizeContracts(12)).toBe(five);
    expect(plurolizeContracts(1000)).toBe(five);
    expect(plurolizeContracts(21000)).toBe(five);
    expect(plurolizeContracts(21901)).toBe(one);
    expect(plurolizeContracts(21902)).toBe(two);
    expect(plurolizeContracts(21903)).toBe(two);
    expect(plurolizeContracts(21904)).toBe(two);
    expect(plurolizeContracts(2000)).toBe(five);
    expect(plurolizeContracts(3000)).toBe(five);
    expect(plurolizeContracts(4000)).toBe(five);
    expect(plurolizeContracts(5000)).toBe(five);
    expect(plurolizeContracts(6000)).toBe(five);
    expect(plurolizeContracts(7000)).toBe(five);
    expect(plurolizeContracts(8000)).toBe(five);
    expect(plurolizeContracts(9000)).toBe(five);
    expect(plurolizeContracts(10000)).toBe(five);
    expect(plurolizeContracts(1000000)).toBe(five);
    expect(plurolizeContracts(1001000)).toBe(five);
    expect(plurolizeContracts(1231991)).toBe(one);
  });
});
