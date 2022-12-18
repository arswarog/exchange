import { AnyAction } from 'redux';

import * as actions from '../actions';

import { ExchangeStatus, IExchangeState } from './types';

export function exchange(state: IExchangeState | undefined, action: AnyAction): IExchangeState {
    if (!state) {
        state = {
            status: ExchangeStatus.Loading,
            currencies: [],
            sourceAmount: 0,
            sourceCurrency: '',
            targetAmount: 0,
            targetCurrency: '',
        };
    }

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
                status: ExchangeStatus.LoadingTarget,
                sourceAmount: action.payload,
            };
        case actions.SET_SOURCE_CURRENCY:
            return {
                ...state,
                status: ExchangeStatus.LoadingTarget,
                sourceCurrency: action.payload,
            };
        case actions.SET_TARGET_AMOUNT:
            return {
                ...state,
                status: ExchangeStatus.LoadingSource,
                targetAmount: action.payload,
            };
        case actions.SET_TARGET_CURRENCY:
            return {
                ...state,
                status: ExchangeStatus.LoadingSource,
                targetCurrency: action.payload,
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
