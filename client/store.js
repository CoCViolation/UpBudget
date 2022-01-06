import { createSlice} from '@reduxjs/toolkit';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './reducers/index.js';

// // we are adding composeWithDevTools here to get easy access to the Redux dev tools
// const store = createStore(reducers, composeWithDevTools());

// export default store;

const initialState = {

}

//REDUCERS
export const budget = addBudget({
    name: 'budget',
  initialState: { value: initialState },
  reducers: {
      budget: { value}
  }
});

export default addBudget.reducer;