import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()
export const store = configureStore({
  reducer: {},
  middleware: [saga],
})
