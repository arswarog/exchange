import { CurrencySymbol } from '../types';

export enum ExchangeStatus {
    Loading,
    LoadingSource,
    LoadingTarget,
    Ready,
}

export enum LastChanged {
    Source,
    Target,
}

export interface IExchangeState {
    status: ExchangeStatus;
    lastChanged: LastChanged;
    currencies: CurrencySymbol[];
    sourceAmount: number;
    sourceCurrency: CurrencySymbol;
    targetAmount: number;
    targetCurrency: CurrencySymbol;
}
