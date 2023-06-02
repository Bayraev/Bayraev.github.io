import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('fetch/get', async (_, thunkAPI) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    return thunkAPI.fulfillWithValue(json);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get questions
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        console.log(action);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
        console.log('gotQuestions: ', state.questions); // got them
        console.log(action);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        console.log('rejected', action);
      });
  },
});

export default fetchSlice.reducer;
