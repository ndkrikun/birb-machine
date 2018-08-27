export enum CurrencyTypes {
  GBP = 'GBP',
  USD = 'USD',
  EUR = 'EUR',
}

export interface Price {
  value: number;
  currency: CurrencyTypes;
}
