import budgetReducer from "../client/reducers/budgetReducer";


describe('MegaMarkets reducer', () => {
    let state;
  
    beforeEach(() => {
      state = {
        userData: [],
        transactions: [],
        categories: [],
        categoryBudget: [],
      };
    });

    describe('default state', () => {
        it('should return a default state when given an undefined input', () => {
          expect(subject(undefined, { type: undefined })).toEqual(state);
        });
      });

    describe('unrecognized action types', () => {
        xit('should return the original without any duplication', () => {
            const action = { type: 'aajsbicawlbejckr' };
            expect(subject(state, action)).toBe(state);
        });
    });

    describe('INPUT_SPENDING', () => {
        const action = {
          type: 'INPUT_SPENDING',
          payload: '',
        };
    
        it('adds spending', () => {
          
        });   
       
      });

      describe('UPDATE_BUDGET', () => {
        const action = {
          type: 'INPUT_SPENDING',
          payload: '',
        };
    
        it('adds spending', () => {
          const { budgetlist } = subject(state, action);
          
        });   
      });
})