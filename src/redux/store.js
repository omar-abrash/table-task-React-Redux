import { configureStore } from "@reduxjs/toolkit";
import { mainDataSliceReducers } from "./mainData-slice";

const store = configureStore({
  reducer: { mainData: mainDataSliceReducers },
});

export default store;
