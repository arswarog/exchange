import { useEffect, useState } from 'react';

import { connect, MapDispatchToProps, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as actions from './actions';
import { getKnownCurrencies } from './api';
import styles from './App.module.scss';
import { AmountInput } from './components/AmountInput';
import { CurrencySelector } from './components/CurrencySelector';
import { useCurrencies } from './hooks';
import { ExchangeStatus, IExchangeState } from './reducers';
import { CurrencySymbol } from './types';

interface IProps {
    sourceAmount: number;
    sourceCurrency: CurrencySymbol;
    targetAmount: number;
    targetCurrency: CurrencySymbol;

    setSourceAmountHandler(value: number): void;
    setSourceCurrencyHandler(value: CurrencySymbol): void;
    setTargetAmountHandler(value: number): void;
    setTargetCurrencyHandler(value: CurrencySymbol): void;
}

function App({
    sourceAmount,
    sourceCurrency,
    targetAmount,
    targetCurrency,
    setSourceAmountHandler,
    setSourceCurrencyHandler,
    setTargetAmountHandler,
    setTargetCurrencyHandler,
}: IProps) {
    const dispatch = useDispatch();

    /*
    const sourceAmount = useSelector((state: IExchangeState) => state.sourceAmount);
    const sourceCurrency = useSelector((state: IExchangeState) => state.sourceCurrency);
    const targetAmount = useSelector((state: IExchangeState) => state.targetAmount);
    const targetCurrency = useSelector((state: IExchangeState) => state.targetCurrency);

    const setSourceAmountHandler = (value: number) => dispatch(actions.setSourceAmount(value));
    const setSourceCurrencyHandler = (value: CurrencySymbol) => dispatch(actions.setSourceCurrency(value));
    const setTargetAmountHandler = (value: number) => dispatch(actions.setTargetAmount(value));
    const setTargetCurrencyHandler = (value: CurrencySymbol) => dispatch(actions.setTargetCurrency(value));
*/

    const status = useSelector<IExchangeState, ExchangeStatus>((state) => state.status);
    const currencies = useCurrencies();

    useEffect(() => {
        getKnownCurrencies().then((currencies) => {
            dispatch(actions.setCurrencies(currencies));
        });
    }, []);

    return (
        <div className={styles.app}>
            <div>
                <AmountInput
                    loading={status === ExchangeStatus.Loading || status === ExchangeStatus.LoadingSource}
                    amount={sourceAmount}
                    onChange={setSourceAmountHandler}
                />
                <CurrencySelector
                    list={currencies}
                    currency={sourceCurrency}
                    onChange={setSourceCurrencyHandler}
                />
            </div>
            {'=>'}
            <div>
                <AmountInput
                    loading={status === ExchangeStatus.Loading || status === ExchangeStatus.LoadingTarget}
                    amount={targetAmount}
                    onChange={setTargetAmountHandler}
                />
                <CurrencySelector
                    list={currencies}
                    currency={targetCurrency}
                    onChange={setTargetCurrencyHandler}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state: IExchangeState) => ({
    sourceAmount: state.sourceAmount,
    sourceCurrency: state.sourceCurrency,
    targetAmount: state.targetAmount,
    targetCurrency: state.targetCurrency,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            setSourceAmountHandler: actions.setSourceAmount,
            setSourceCurrencyHandler: actions.setSourceCurrency,
            setTargetAmountHandler: actions.setTargetAmount,
            setTargetCurrencyHandler: actions.setTargetCurrency,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(App);
