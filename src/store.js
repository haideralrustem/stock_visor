import { configureStore } from '@reduxjs/toolkit';
import UserStateSliceReducer from './redux/UserStateSlice'


export default configureStore({
  reducer: {
    userState: UserStateSliceReducer,
  },
})