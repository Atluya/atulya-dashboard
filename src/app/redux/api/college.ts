import { getApi } from "../../api-interface";
export const getCollegeAction = () => async (dispatch: any) => {
    try {
      const resp: any = await getApi("/colleges/logged-in-college");
      console.log(resp.data.data)
      console.log("Hey")
      dispatch({
        type: "SET_COLLEGE",
        payload: resp.data.data
        });
    } catch (e: any) {
        dispatch({
            type: "SET_COLLEGE",
            payload: {}
        });
    }
  }