import { combineReducers } from "redux-immutable";

import { reducer as scenicSpotReducer } from "./scenicSpot/index";

export default combineReducers({
  scenicSpot: scenicSpotReducer,
});
