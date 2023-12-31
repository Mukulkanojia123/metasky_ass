import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: false,
  },
  reducers: {
    login: (state)=>{
        state.user = true;
    },
    logout : (state)=>{
        state.user = false;
}
    
  },
});
export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;