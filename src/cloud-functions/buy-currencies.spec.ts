const { getCurrencies, buyCurrency, sellCurrency } = require('./buy-currency.cjs');

import '../types/index';

describe('buy currencies', () => {
    describe('getCurrencies', () => {
        it('base', async () => {
            expect(getCurrencies()).toEqual(['USDT', 'BTC', 'ETH']);
        });
    });
    describe('sell', () => {
        it('10 BTC to USDT without options', () => {
            const res = sellCurrency({
                sourceCurrency: 'BTC',
                targetCurrency: 'USDT',
                sourceAmount: 10,
                options: {},
            });

            expect(res).toBeCloseTo(170000, -4);
        });
        it('170000 USDT to BTCT without options', () => {
            const res = sellCurrency({
                sourceCurrency: 'USDT',
                targetCurrency: 'BTC',
                sourceAmount: 170000,
                options: {},
            });

            expect(res).toBeLessThan(9.6);
            expect(res).toBeGreaterThan(9);
        });
    });
    describe('buy', () => {
        it('get 170000 USDT from BTC without options', () => {
            const res = buyCurrency({
                sourceCurrency: 'BTC',
                targetCurrency: 'USDT',
                targetAmount: 170000,
                options: {},
            });

            expect(res).toBeCloseTo(10, 0);
        });
        it('get 10 BTC from USDT without options', () => {
            const res = buyCurrency({
                sourceCurrency: 'USDT',
                targetCurrency: 'BTC',
                targetAmount: 10,
                options: {},
            });

            expect(res).toBeGreaterThan(170000);
            expect(res).toBeLessThan(180000);
        });
    });
});
