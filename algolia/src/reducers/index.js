import {combineReducers} from 'redux';
import {SEARCH_RESULTS, USER_HISTORY,} from "../actions";

function results(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS:
        console.log("Reducer: " + action.results)
      return action.results;
    default:
      return state;
  }
}

function history(state = [], action) {
    switch (action.type) {
        case USER_HISTORY:
            return state.concat(action.query)
        default:
            return state;    
    }
}

const rootReducer = combineReducers({
  results,
  history
});

export default rootReducer;