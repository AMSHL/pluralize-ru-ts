/**
 * Метод генерирует функцию, которая cклоненяет существительные
 * @example pluralize('договор', 'договора', 'договоров');
 *
 * @param {string} one - слонение с числом 1
 * @param {string} two - слонение с числом 2
 * @param {string} five - слонение с числом 5
 *
 * @returns {Function} Функция для склонения существительных
 */
export const pluralize = (one = '' as string, two = '' as string, five = two as string) => (number = 0 as number): string => {
  let num = Math.abs(number);
  num %= 100;
  if (num >= 5 && num <= 20) {
    return five || '';
  }
  num %= 10;
  if (num === 1) {
    return one || '';
  }
  if (num >= 2 && num <= 4) {
    return two || '';
  }
  return five || '';
};
