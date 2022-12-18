import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { calculate } from './middlewares/calculate';
import { logger } from './middlewares/logger';
import { exchange, IExchangeState } from './reducers';

const STORE_KEY = 'store';

const initialState = parseJsonOrReturnUndefined<IExchangeState>(localStorage.getItem(STORE_KEY));

export const store = createStore(
    exchange,
    initialState,
    composeWithDevTools(applyMiddleware(logger, calculate)),
    // other store enhancers if any
);

store.subscribe(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(store.getState()));
});

function parseJsonOrReturnUndefined<T>(str: string | null): T | undefined {
    if (!str) {
        return undefined;
    }

    try {
        return JSON.parse(str);
    } catch (_) {
        return undefined;
    }
}
