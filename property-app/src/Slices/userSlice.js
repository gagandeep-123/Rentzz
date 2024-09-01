import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
      userName: "",
      userAvatar: ""
  },
  reducers: {
    addName: (state, action) => {
      state.userName = action.payload;
    },
      addAvatar: (state, action) => {
        state.userAvatar = action.payload.source
    }
  },
});
export const { addName, addAvatar } = userSlice.actions;

export default userSlice.reducer;