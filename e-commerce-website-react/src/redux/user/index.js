import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: {
    LoggedIn: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      return {
        ...state,
        LoggedIn: true,
        user: action.payload,
      };
    },
    logout(state, action) {
      toast.info("You have been Logged out");
      return {
        ...state,
        LoggedIn: false,
        user: state.user.name,
      };
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
