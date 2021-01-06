import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
    // userData: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
    // setUserData: (state, action) => {
    //   state.userData = action.payload
    // }
  },
});

export const { setUser, setUserData } = userSlice.actions;

// export const selectLoginEmail = (state) => state.user.email;

export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectPhone = (state) => state.user.phone;

export default userSlice.reducer;
