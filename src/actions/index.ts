import { AnyAction } from 'redux';

import { CurrencySymbol } from '../types';

export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_SOURCE_AMOUNT = 'SET_SOURCE_AMOUNT';
export const SET_SOURCE_CURRENCY = 'SET_SOURCE_CURRENCY';
export const SET_TARGET_AMOUNT = 'SET_TARGER_AMOUNT';
export const SET_TARGET_CURRENCY = 'SET_TARGER_CURRENCY';

export function setSourceAmount(amount: number): AnyAction {
    return {
        type: SET_SOURCE_AMOUNT,
        payload: amount,
    };
}

export function setSourceCurrency(currency: CurrencySymbol): AnyAction {
    return {
        type: SET_SOURCE_CURRENCY,
        payload: currency,
    };
}

export function setTargetAmount(amount: number): AnyAction {
    return {
        type: SET_TARGET_AMOUNT,
        payload: amount,
    };
}

export function setTargetCurrency(currency: CurrencySymbol): AnyAction {
    return {
        type: SET_TARGET_CURRENCY,
        payload: currency,
    };
}

export function setCurrencies(currencies: CurrencySymbol[]): AnyAction {
    return {
        type: SET_CURRENCIES,
        payload: currencies,
    };
}
