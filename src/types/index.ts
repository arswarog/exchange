/**
 * Код валюты в ISO 4217
 * https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B4%D1%8B_%D0%B8_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B_%D0%B2%D0%B0%D0%BB%D1%8E%D1%82#%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2
 */
export type CurrencySymbol = string;

export interface IOptions {
    premium?: boolean;
    fast?: boolean;
}

/**
 * Функция покупки валюты
 * @param sourceCurrency Исходная валюта
 * @param targetCurrency Целевая валюта
 * @param targetAmount {float} Сумма в целевой валюте (в основных единицах валюты)
 * @param options
 * @returns Результат конвертации в исходной валюте (в основных единицах валюты)
 */
export interface BuyCurrency {
    (
        sourceCurrency: CurrencySymbol,
        targetCurrency: CurrencySymbol,
        targetAmount: number,
        options?: IOptions,
    ): Promise<number>;
}

/**
 * Функция продажи валюты
 * @param sourceCurrency Исходная валюта
 * @param targetCurrency Целевая валюта
 * @param sourceAmount {float} Сумма в исходной валюте (в основных единицах валюты)
 * @param options
 * @returns Результат конвертации в целевой валюте (в основных единицах валюты)
 */
export interface SellCurrency {
    (
        sourceCurrency: CurrencySymbol,
        targetCurrency: CurrencySymbol,
        sourceAmount: number,
        options?: IOptions,
    ): Promise<number>;
}

/**
 * Список доступных валют
 * @returns
 */
export interface GetKnownCurrencies {
    (): Promise<CurrencySymbol[]>;
}
