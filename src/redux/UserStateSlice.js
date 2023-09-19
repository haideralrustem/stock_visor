import { createSlice } from '@reduxjs/toolkit'

export const UserStateSlice = createSlice({
  name: 'userState',
  initialState: {
    loggedIn: false,
    email: "",
  },
  reducers: {
    logIn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.loggedIn = true
      
    },
    logOff: (state) => {
      state.loggedIn = false;
      state.email= "";
    },
    setlogIn: (state, action) => {
      state.loggedIn = action.payload
    },
    setEmail:  (state, action) => {
      
      state.email = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOff, setlogIn, setEmail } = UserStateSlice.actions

export default UserStateSlice.reducer