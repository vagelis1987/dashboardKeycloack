import { ActionTypesAnalytics } from "../constants/actionTypesAnalytics";
const intialState = {
  vesselConnection: [],
};

export const analyticReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypesAnalytics.FETCH_ALL_VESSEL_CONNECTION:
      return { ...state, vesselConnection: payload };
    default:
      return state;
  }
};

