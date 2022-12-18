export const logger: Middleware = (store) => (next) => (action) => {
    console.log('logging before', action.type); //, store.getState(), action);

    next(action);

    console.log('logging after', action.type); //, store.getState(), action);
};
