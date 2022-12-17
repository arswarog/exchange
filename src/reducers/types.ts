import { CurrencySymbol } from '../types';

export interface IExchangeState {
    currencies: CurrencySymbol[];
    sourceAmount: number;
    sourceCurrency: CurrencySymbol;
    targetAmount: number;
    targetCurrency: CurrencySymbol;
}
