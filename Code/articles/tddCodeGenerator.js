// Asegúrate de que CodeBlockGenerator.js esté cargado antes.

document.addEventListener('DOMContentLoaded', () => {
  // Ejemplos multi-lenguaje
  insertCodeBlock({
    selector: '#java-example',
    filename: 'CurrencyConverterTest.java',
    language: 'java',
    code: `import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class CurrencyConverterTest {
  @Test
  void throwsForMissingCurrency() {
    var converter = new CurrencyConverter(Map.of("EUR", 1.1));
    assertThrows(IllegalArgumentException.class, () -> {
      converter.convert(5, "JPY");
    });
  }
}`
  });

  insertCodeBlock({
    selector: '#csharp-example',
    filename: 'CurrencyConverterTests.cs',
    language: 'csharp',
    code: `using NUnit.Framework;

[TestFixture]
public class CurrencyConverterTests {
  [Test]
  public void ThrowsForMissingCurrency() {
    var converter = new CurrencyConverter(
      new Dictionary<string, double>{{"EUR", 1.1}}
    );
    Assert.Throws<ArgumentException>(() => converter.Convert(5, "JPY"));
  }
}`
  });

  insertCodeBlock({
    selector: '#python-example',
    filename: 'test_currency_converter.py',
    language: 'python',
    code: `import unittest

class CurrencyConverterTest(unittest.TestCase):
    def test_throws_for_unknown_currency(self):
        converter = CurrencyConverter({"EUR": 1.1})
        with self.assertRaises(ValueError):
            converter.convert(5, "JPY")`
  });

  // Ejemplos de los 6 pasos TDD
  insertCodeBlock({
    selector: '#tdd-step1',
    filename: 'converter.test.ts',
    language: 'typescript',
    code: `import { CurrencyConverter } from './converter';

test('converts EUR to USD at fixed rate', () => {
  const converter = new CurrencyConverter({ EUR: 1.2 });
  expect(converter.convert(10, 'EUR')).toBe(12);
});`
  });

  insertCodeBlock({
    selector: '#tdd-step2',
    filename: 'converter.ts',
    language: 'typescript',
    code: `export class CurrencyConverter {
  constructor(private rates: Record<string, number>) {}

  convert(amount: number, currency: string): number {
    return amount * this.rates[currency];
  }
}`
  });

  insertCodeBlock({
    selector: '#tdd-step3',
    filename: 'converter.test.ts',
    language: 'typescript',
    code: `test('throws error for unknown currency', () => {
  const converter = new CurrencyConverter({ EUR: 1.2 });
  expect(() => converter.convert(10, 'JPY')).toThrow('Unsupported currency');
});`
  });

  insertCodeBlock({
    selector: '#tdd-step4',
    filename: 'converter.ts',
    language: 'typescript',
    code: `convert(amount: number, currency: string): number {
  const rate = this.rates[currency];
  if (!rate) throw new Error('Unsupported currency');
  return amount * rate;
}`
  });

  insertCodeBlock({
    selector: '#tdd-step5',
    filename: 'converter.test.ts',
    language: 'typescript',
    code: `const mockApi = {
  getRate: jest.fn().mockResolvedValue(1.2),
};

const converter = new CurrencyConverter(mockApi);
const result = await converter.convertAsync(10, 'EUR');
expect(result).toBe(12);`
  });

  insertCodeBlock({
    selector: '#tdd-step6',
    filename: 'converter.ts',
    language: 'typescript',
    code: `export class CurrencyConverter {
  constructor(private api: { getRate(currency: string): Promise<number> }) {}

  async convertAsync(amount: number, currency: string): Promise<number> {
    const rate = await this.api.getRate(currency);
    return amount * rate;
  }
}`
  });
});