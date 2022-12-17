import { AnyAction } from 'redux';

import * as actions from '../actions';

import { IExchangeState } from './types';

export function exchange(state: IExchangeState | undefined, action: AnyAction): IExchangeState {
    if (!state) {
        state = {
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
                currencies: action.payload,
            };
        case actions.SET_SOURCE_AMOUNT:
            return {
                ...state,
                sourceAmount: action.payload,
            };
        case actions.SET_SOURCE_CURRENCY:
            return {
                ...state,
                sourceCurrency: action.payload,
            };
        case actions.SET_TARGET_AMOUNT:
            return {
                ...state,
                targetAmount: action.payload,
            };
        case actions.SET_TARGET_CURRENCY:
            return {
                ...state,
                targetCurrency: action.payload,
            };
    }

    return state;
}
