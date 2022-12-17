import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { calculate } from './middlewares/calculate';
import { logger } from './middlewares/logger';
import { exchange } from './reducers';

export const store = createStore(
    exchange,
    composeWithDevTools(applyMiddleware(logger, calculate)),
    // other store enhancers if any
);
