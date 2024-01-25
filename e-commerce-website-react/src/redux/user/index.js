import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      
      return {
        user: action.payload.values,
      };
    },
    logout: (state) => {
      toast.info("You have been Logged out")
      state.user = {
        name: state.user.name,
      };
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state) => state.user.user;
