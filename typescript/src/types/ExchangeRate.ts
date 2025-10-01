export interface ExchangeRate {
  [base: string]: {
    [target: string]: number;
  };
}
