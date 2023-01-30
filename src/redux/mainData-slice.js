import { createSlice } from "@reduxjs/toolkit";

const initialState = { mainData: [], numberOfPages: 0 };

const mainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    // first reducer to get main data from (API)
    getData(state, action) {
      state.mainData = action.payload;
      // reCalculate number Of Pages
      if (state.mainData.length % 10 === 0) {
        state.numberOfPages = state.mainData.length / 10;
      } else {
        state.numberOfPages = state.mainData.length / 10 + 1;
      }
    },
    // second Reducer after make Filteration
    dataFilteration(state, action) {
      // fiter data depend on action payload
      if (action.payload.type === "creationTimestamp") {
        state.mainData = state.mainData.filter(
          (item) =>
            item[action.payload.type].substring(0, 10) === action.payload.value
        );
      } else {
        state.mainData = state.mainData.filter(
          (item) => item[action.payload.type] === action.payload.value
        );
      }
      // reCalculate number Of Pages
      if (state.mainData.length % 10 === 0) {
        state.numberOfPages = state.mainData.length / 10;
      } else {
        state.numberOfPages = state.mainData.length / 10 + 1;
      }
    },
  },
});

export const mainDataSliceReducers = mainDataSlice.reducer;
export const mainDataSliceActions = mainDataSlice.actions;
