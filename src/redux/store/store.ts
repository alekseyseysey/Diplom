import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { devToolsEnhancer, composeWithDevTools } from "redux-devtools-extension";
import { logger } from '../middleware/logger.ts';
import reducer from '../reducers/reducer.ts';





const store = createStore(
reducer,
composeWithDevTools(applyMiddleware(thunk, logger)),
)




export default store