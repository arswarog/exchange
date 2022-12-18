import {
    setCurrencies,
    setSellResult,
    setSourceAmount,
    setSourceCurrency,
    setTargetAmount,
    setTargetCurrency,
} from '../actions';
import { CurrencySymbol } from '../types';

import { exchange } from './reducer';
import { ExchangeStatus, LastChanged } from './types';

const currencies: CurrencySymbol[] = ['ETH', 'BTC', 'USDT'];

describe('ExchangeReducer', () => {
    describe('scenarios', () => {
        test('поменять 10 BTC на USDT', () => {
            let state = exchange(undefined, setCurrencies(currencies));

            state = exchange(state, setSourceAmount(10));

            expect(state).toEqual({
                currencies,
                status: ExchangeStatus.LoadingTarget,
                lastChanged: LastChanged.Source,
                sourceAmount: 10,
                sourceCurrency: 'ETH',
                targetAmount: 0,
                targetCurrency: 'BTC',
            });

            state = exchange(state, setSourceCurrency('BTC'));

            expect(state).toEqual({
                currencies,
                status: ExchangeStatus.LoadingTarget,
                lastChanged: LastChanged.Source,
                sourceAmount: 10,
                sourceCurrency: 'BTC',
                targetAmount: 0,
                targetCurrency: 'ETH',
            });

            state = exchange(state, setTargetCurrency('USDT'));

            expect(state).toEqual({
                currencies,
                status: ExchangeStatus.LoadingTarget,
                lastChanged: LastChanged.Source,
                sourceAmount: 10,
                sourceCurrency: 'BTC',
                targetAmount: 0,
                targetCurrency: 'USDT',
            });

            state = exchange(state, setSellResult(170));

            expect(state).toEqual({
                currencies,
                status: ExchangeStatus.Ready,
                lastChanged: LastChanged.Source,
                sourceAmount: 10,
                sourceCurrency: 'BTC',
                targetAmount: 170,
                targetCurrency: 'USDT',
            });
        });
    });
});
