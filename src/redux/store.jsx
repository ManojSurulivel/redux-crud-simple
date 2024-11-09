import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../redux/UserReducer.jsx'



export const store = configureStore({
    reducer:{
         users: UserReducer,
    }
  }) 