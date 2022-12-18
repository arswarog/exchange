import { AnyAction } from 'redux';

import { CurrencySymbol } from '../types';

export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_SOURCE_AMOUNT = 'SET_SOURCE_AMOUNT';
export const SET_SOURCE_CURRENCY = 'SET_SOURCE_CURRENCY';
export const SET_TARGET_AMOUNT = 'SET_TARGET_AMOUNT';
export const SET_TARGET_CURRENCY = 'SET_TARGET_CURRENCY';
export const SET_SELL_RESULT = 'SET_SELL_RESULT';
export const SET_BUY_RESULT = 'SET_BUY_RESULT';

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

export function setSellResult(amount: number): AnyAction {
    return {
        type: SET_SELL_RESULT,
        payload: amount,
    };
}

export function setBuyResult(amount: number): AnyAction {
    return {
        type: SET_BUY_RESULT,
        payload: amount,
    };
}
