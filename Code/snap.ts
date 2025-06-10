// converter.test.ts
import { CurrencyConverter } from './converter';

test('converts EUR to USD at fixed rate', () => {
  const converter = new CurrencyConverter({ EUR: 1.2 });
  expect(converter.convert(10, 'EUR')).toBe(12);
});