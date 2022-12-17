export const logger: Middleware = (store) => (next) => (action) => {
    console.log('loggin before', action.type); //, store.getState(), action);

    next(action);

    console.log('loggin after', action.type); //, store.getState(), action);
};
