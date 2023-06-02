import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAdmin: true,
  myRequests: [],
};

const userRoleSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    switchRole: (state) => {
      state.isAdmin = !state.isAdmin;
    },
    newRequest: (state, action) => {
      state.myRequests.push(action.payload);
    },
  },
});

export const { switchRole } = userRoleSlice.actions;
export const { newRequest } = userRoleSlice.actions;
export default userRoleSlice.reducer;
