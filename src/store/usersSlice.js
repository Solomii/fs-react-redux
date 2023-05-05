import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (params = {res:5}, thunkAPI) => {
    try {
      const { dispatch } = thunkAPI;
      const { results } = await fetch(
        'https://randomuser.me/api/?results='+params.res
      ).then((res) => res.json());
      dispatch(loadUsers(results))
    } catch (error) {}
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isFetching: false,
    error: null,
    users: [],
  },
  reducers: {
    loadUsers(state, action){
      state.users = action.payload;
    }
  },
});

const { reducer, actions:{loadUsers} } = usersSlice;
export default reducer;
