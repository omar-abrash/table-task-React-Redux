import { mainDataSliceActions } from "../redux/mainData-slice";

const mainURL = "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f";

export const gettingData = (dispatch) => {
  return async () => {
    // get data function
    try {
      const response = await fetch(mainURL);
      const data = await response.json();
      const mainDataArray = data.result.auditLog;
      dispatch(mainDataSliceActions.getData(mainDataArray));
      //
    } catch (e) {
      console.log(e.message);
    }
  };
};
