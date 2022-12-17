import { setSourceAmount, setSourceCurrency, setTargetAmount, setTargetCurrency } from '../actions';
import { setSourceAmount } from '../actions';
import { setSourceAmount } from '../actions';

import { exchange } from './reducer';
import { IExchangeState } from './types';

describe('ExchangeReducer', () => {
    describe('scenarios', () => {
        test('поменять 10 BTC на стейблкоин', () => {
            const state: IExchangeState = {
                sourceAmount: 0,
                sourceCurrency: 'ETH',
                targetAmount: 0,
                targetCurrency: 'ETH',
            };

            exchange(state, setSourceAmount(10));
            exchange(state, setTargetAmount(10));

            expect(state).toEqual({
                sourceAmount: 10,
                sourceCurrency: 'ETH',
                targetAmount: 0,
                targetCurrency: 'ETH',
            });

            exchange(state, setSourceCurrency('BTC'));

            expect(state).toEqual({
                sourceAmount: 10,
                sourceCurrency: 'BTC',
                targetAmount: 0,
                targetCurrency: 'ETH',
            });

            exchange(state, setTargetCurrency('USDT'));

            expect(state).toEqual({
                sourceAmount: 10,
                sourceCurrency: 'BTC',
                targetAmount: 0,
                targetCurrency: 'USDT',
            });
        });
    });
});
