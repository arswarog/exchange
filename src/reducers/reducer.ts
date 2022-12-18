import { AnyAction } from 'redux';

import * as actions from '../actions';

import { ExchangeStatus, IExchangeState, LastChanged } from './types';

export function exchange(state: IExchangeState | undefined, action: AnyAction): IExchangeState {
    if (!state) {
        state = {
            status: ExchangeStatus.Loading,
            lastChanged: LastChanged.Source,
            currencies: [],
            sourceAmount: 0,
            sourceCurrency: '',
            targetAmount: 0,
            targetCurrency: '',
        };
    }

    const { sourceCurrency, targetCurrency, lastChanged } = state;

    switch (action.type) {
        case actions.SET_CURRENCIES:
            return {
                ...state,
                status: ExchangeStatus.Ready,
                currencies: action.payload,
                sourceCurrency: action.payload[0],
                targetCurrency: action.payload[1],
            };
        case actions.SET_SOURCE_AMOUNT:
            return {
                ...state,
                lastChanged: LastChanged.Source,
                status: ExchangeStatus.LoadingTarget,
                sourceAmount: action.payload,
            };
        case actions.SET_SOURCE_CURRENCY:
            return {
                ...state,
                status:
                    lastChanged === LastChanged.Source ? ExchangeStatus.LoadingTarget : ExchangeStatus.LoadingSource,
                sourceCurrency: action.payload,
                targetCurrency: targetCurrency === action.payload ? sourceCurrency : targetCurrency,
            };
        case actions.SET_TARGET_AMOUNT:
            return {
                ...state,
                lastChanged: LastChanged.Target,
                status: ExchangeStatus.LoadingSource,
                targetAmount: action.payload,
            };
        case actions.SET_TARGET_CURRENCY:
            return {
                ...state,
                status:
                    lastChanged === LastChanged.Source ? ExchangeStatus.LoadingTarget : ExchangeStatus.LoadingSource,
                targetCurrency: action.payload,
                sourceCurrency: sourceCurrency === action.payload ? targetCurrency : sourceCurrency,
            };
        case actions.SET_SELL_RESULT:
            return {
                ...state,
                status: ExchangeStatus.Ready,
                targetAmount: action.payload,
            };
        case actions.SET_BUY_RESULT:
            return {
                ...state,
                status: ExchangeStatus.Ready,
                sourceAmount: action.payload,
            };
    }

    return state;
}
