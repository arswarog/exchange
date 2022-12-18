import { Middleware } from 'redux';

import {
    SET_SOURCE_AMOUNT,
    SET_TARGET_AMOUNT,
    setSellResult,
    setBuyResult,
    SET_SOURCE_CURRENCY,
    SET_TARGET_CURRENCY,
} from '../actions';
import { buyCurrency, sellCurrency } from '../api';
import { IExchangeState, LastChanged } from '../reducers';

const watchActions = [SET_SOURCE_AMOUNT, SET_SOURCE_CURRENCY, SET_TARGET_AMOUNT, SET_TARGET_CURRENCY];

export const calculate: Middleware = ({ getState, dispatch }) => {
    let controller: AbortController | undefined = undefined;

    return (next) => (action) => {
        next(action);

        if (!watchActions.includes(action.type)) {
            return;
        }

        controller?.abort();

        controller = new AbortController();

        const lastChanged: LastChanged = getState().lastChanged;

        if (lastChanged === LastChanged.Source) {
            const { sourceAmount, sourceCurrency, targetCurrency } = getState() as IExchangeState;

            sellCurrency(controller.signal, sourceCurrency, targetCurrency, sourceAmount)
                .then((value) => dispatch(setSellResult(value)))
                .catch(() => console.log('ошибка продажи валюты'));
        }

        if (lastChanged === LastChanged.Target) {
            const { targetAmount, sourceCurrency, targetCurrency } = getState() as IExchangeState;

            buyCurrency(controller.signal, sourceCurrency, targetCurrency, targetAmount)
                .then((value) => dispatch(setBuyResult(value)))
                .catch(() => console.log('ошибка покупки валюты'));
        }
    };
};
