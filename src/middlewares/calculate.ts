import { Middleware } from 'redux';

import { SET_SOURCE_AMOUNT, SET_TARGET_AMOUNT, setSellResult, setBuyResult } from '../actions';
import { buyCurrency, sellCurrency } from '../api';
import { IExchangeState } from '../reducers';

export const calculate: Middleware =
    ({ getState, dispatch }) =>
    (next) =>
    (action) => {
        next(action);

        if (action.type === SET_SOURCE_AMOUNT) {
            const { sourceAmount, sourceCurrency, targetCurrency } = getState() as IExchangeState;

            sellCurrency(sourceCurrency, targetCurrency, sourceAmount)
                .then((value) => dispatch(setSellResult(value)))
                .catch(() => console.log('ошибка продажи валюты'));
        }

        if (action.type === SET_TARGET_AMOUNT) {
            const { targetAmount, sourceCurrency, targetCurrency } = getState() as IExchangeState;

            buyCurrency(sourceCurrency, targetCurrency, targetAmount)
                .then((value) => dispatch(setBuyResult(value)))
                .catch(() => console.log('ошибка покупки валюты'));
        }
    };
