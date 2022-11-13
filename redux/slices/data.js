import axiosInstance from "../../util/axios";

// import { FetchData } from "../../types"

import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
  isLoading: false,
  datas: [],
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getDatasSuccess(state, action) {
      state.isLoading = false;
      state.datas = action.payload;
    },
  },
});

export default slice.reducer;
export const { actions } = slice;

export function getDatas() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axiosInstance.get("/api/randomproduct");

      dispatch(slice.actions.getDatasSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
