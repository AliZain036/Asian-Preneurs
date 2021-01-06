import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/counter/userSlice";
import userDataReducer from "../features/counter/userDataSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    userData: userDataReducer
  },
});
