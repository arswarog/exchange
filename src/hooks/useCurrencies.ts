import { useSelector } from 'react-redux';

import { IExchangeState } from '../reducers';
import { CurrencySymbol } from '../types';

export function useCurrencies(): CurrencySymbol[] {
    return useSelector<IExchangeState, CurrencySymbol[]>((state) => state.currencies);
}
