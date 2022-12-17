import { Middleware } from 'redux';

import { setTargetAmount, SET_SOURCE_AMOUNT } from '../actions';
import { sellCurrency } from '../api';
import { IExchangeState } from '../reducers';

export const calculate: Middleware =
    ({ getState, dispatch }) =>
    (next) =>
    (action) => {
        next(action);

        if (action.type === SET_SOURCE_AMOUNT) {
            const { sourceAmount, sourceCurrency, targetCurrency } = getState() as IExchangeState;

            sellCurrency(sourceCurrency, targetCurrency, sourceAmount)
                .then((value) => dispatch(setTargetAmount(value)))
                .catch(() => {
                    console.log('ошибка продажи валюты');
                });
        }
    };
