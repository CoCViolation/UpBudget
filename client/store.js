<<<<<<< HEAD
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './reducers/index.js';
=======
import { createSlice} from '@reduxjs/toolkit';
>>>>>>> dev

const initialState = {
    budget: { 
        groceries : 0, 
        gym : 0, 
        rent : 0, 
        car_loan : 0, 
        fun_money : 0, 
        student_loan : 0, 
        electronics : 0, 
        day_care : 0, 
        clothing : 0
    },
    spending: { 
        groceries : 0, 
        gym : 0, 
        rent : 0, 
        car_loan : 0, 
        fun_money : 0, 
        student_loan : 0, 
        electronics : 0, 
        day_care : 0, 
        clothing : 0,
    }
}

<<<<<<< HEAD
export default store;
=======
export const configurationSlice = createSlice({
  name: 'configuration',
  initialState: initialState,
  reducers: {
    addBudget: (state, action) => {
        state.budget = action.payload;
    },
    resetBudget: (state, action) => {
        state.budget = initialState;
    },
    addSpending: (state, action) => {
        state.spending = action.payload;
    },
    resetSpending: (state, action) => {
        state.spending = initialState;
    }
  }
});

export const { addBudget, resetBudget, addSpending, resetSpending } = configurationSlice.actions;

export default configurationSlice.reducer;
>>>>>>> dev
