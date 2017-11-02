import { createStore, applyMiddleware } from "redux";
import reducer from '../components/reducers/reducer';

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//getting error commenting this out
// //////Creating store with redux chrome devtool//////
// export default () => {
//         const store = createStore( reducer  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
//         return store;
//     }
    