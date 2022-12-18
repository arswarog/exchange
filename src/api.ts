import { BuyCurrency, CurrencySymbol, GetKnownCurrencies, IOptions, SellCurrency } from './types';

const baseUrl = 'https://functions.yandexcloud.net/d4el15n3josghdmf2630';

function makeUrl(action: string, params: Record<string, any> = {}): string {
    return baseUrl + '?' + new URLSearchParams({ ...params, action }).toString();
}

export const buyCurrency = async (
    signal: AbortSignal,
    sourceCurrency: CurrencySymbol,
    targetCurrency: CurrencySymbol,
    targetAmount: number,
    options: IOptions = {},
): Promise<number> => {
    return fetch(
        makeUrl('buy', {
            sourceCurrency,
            targetCurrency,
            targetAmount,
            ...options,
        }),
        { signal },
    ).then((res) => {
        if (res.status === 200) {
            return res.json();
        }

        throw new Error('Something wrong');
    });
};

export const sellCurrency = async (
    signal: AbortSignal,
    sourceCurrency: CurrencySymbol,
    targetCurrency: CurrencySymbol,
    sourceAmount: number,
    options: IOptions = {},
): Promise<number> => {
    return fetch(
        makeUrl('sell', {
            sourceCurrency,
            targetCurrency,
            sourceAmount,
            ...options,
        }),
        { signal },
    ).then((res) => {
        if (res.status === 200) {
            return res.json();
        }

        throw new Error('Something wrong');
    });
};

export const getKnownCurrencies: GetKnownCurrencies = () => {
    return fetch(makeUrl('getCurrencies')).then((res) => {
        if (res.status === 200) {
            return res.json();
        }

        throw new Error('Something wrong');
    });
};
