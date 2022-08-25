import { RootState } from "../store";

const initialState:any = {
  
};

const collegeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_COLLEGE": {
      return action.payload
    }
    default:
      return state;
  }
};

export default collegeReducer;