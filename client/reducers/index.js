import { combineReducers } from 'redux';
import budgetReducer from './budgetReducer.js';

// import all reducers here
// import marketsReducer from './marketsReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  // markets: marketsReducer,
  budget: budgetReducer,
});

// make the combined reducers available for import
export default reducers;
