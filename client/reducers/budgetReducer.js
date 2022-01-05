import * as types from '../constants/actionTypes.jsx';
//state = {userData, categories, transactions, categoryBudget}

const initialState = {
  userData: [],
  transactions: [],
  categories: [],
  categoryBudget: [],
};

const budgetReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.INPUT_SPENDING: {
      //   const newMarket = {
      //     marketId: state.lastMarketId,
      //     location: action.payload,
      //     cards: 1,
      //   };

      return {
        //UPDATED STATE
        ...state,
        // marketList,
        // lastMarketId: state.lastMarketId + 1,
        // totalMarkets: state.totalMarkets + 1,
        // totalCards: state.totalCards + 1,
        // newLocation: '',
      };
    }

    case types.UPDATE_BUDGET: {
      return {
        ...state,
      };
    }
  }
};

export default budgetReducer;
