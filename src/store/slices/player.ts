import { createSlice } from '@reduxjs/toolkit'
import { modules } from '../../mock/module'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules,
    },
  },
  reducers: {},
})

export const player = playerSlice.reducer
