import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import createReducer from "./createReducer";

const configureStore = () => {
    const composeEnhancers =
        (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const middlewares = [ReduxThunk];
    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(createReducer(), composeEnhancers(...enhancers));

    store.injectedReducers = {}; // Reducer registry

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    // if (module.hot) {
    //     module.hot.accept("./reducers", () => {
    //         store.replaceReducer(createReducer(store.injectedReducers));
    //     });
    // }

    return { store };
};

export default configureStore;
