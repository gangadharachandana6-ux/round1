import { createStore } from "redux";
const initialState = { interactions: [] };
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_INTERACTION":
      return { ...state, interactions: [...state.interactions, action.payload] };
    default:
      return state;
  }
}
const store = createStore(reducer);
export default store;
