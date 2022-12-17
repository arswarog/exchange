import { BuyCurrency, CurrencySymbol, GetKnownCurrencies, IOptions, SellCurrency } from './types';

const quotes = [];

const baseUrl = 'https://functions.yandexcloud.net/d4el15n3josghdmf2630';

export const buyCurrency: BuyCurrency = async (
    from: CurrencySymbol,
    to: CurrencySymbol,
    amount: number,
    options: IOptions = {},
): Promise<number> => {
    return amount;
};

export const sellCurrency: SellCurrency = async (
    from: CurrencySymbol,
    to: CurrencySymbol,
    amount: number,
    options: IOptions = {},
): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(amount * 2);
        }, Math.random() * 1000);
    });
};

export const getKnownCurrencies: GetKnownCurrencies = () => {
    return fetch(baseUrl + '?action=getCurrencies')
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }

            throw new Error('Something wrong');
        })
        .then((data) => {
            console.log('getKnownCurrencies response: ', data);

            return data;
        });
};
