import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "user_data",
  initialState: {
    userData: null
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    }
  },
});

export const { setUserData } = userDataSlice.actions;

export const selectLoginEmail = (state) => state.userData.email;
export const selectLoginPassword = (state) => state.userData.password;

export default userDataSlice.reducer;
