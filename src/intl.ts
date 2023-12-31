import { IntlMessageFormat } from 'intl-messageformat';

export const locale = 'es';

export function formatUyu(
  number: number,
  fractionDigits = 0,
  display = 'narrowSymbol',
): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'UYU',
    currencyDisplay: display as any,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });

  return formatter.format(number);
}

export function formatPercentage(number: number, fractionDigits = 0): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });

  return formatter.format(number);
}

export function formatMessage(
  message: string,
  values: Record<string, any>,
): string {
  const formatter = new IntlMessageFormat(message, locale);

  return formatter.format(values);
}

export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions,
): string {
  const formatter = new Intl.DateTimeFormat(locale, options);

  return formatter.format(date);
}
