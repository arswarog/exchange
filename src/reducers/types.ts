import { CurrencySymbol } from '../types';

export enum ExchangeStatus {
    Loading,
    LoadingSource,
    LoadingTarget,
    Ready,
}

export interface IExchangeState {
    status: ExchangeStatus;
    currencies: CurrencySymbol[];
    sourceAmount: number;
    sourceCurrency: CurrencySymbol;
    targetAmount: number;
    targetCurrency: CurrencySymbol;
}
