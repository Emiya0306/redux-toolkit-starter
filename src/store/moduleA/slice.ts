import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { changeStateF } from './asyncAction';

export default createSlice({
  name: 'moduleA',
  initialState: () => ({
    stateA: 'stringA',
    objectB: {
      stateC: 'stringC',
      stateD: 0,
      objectE: {
        stateF: false,
      },
    },
  }),
  reducers: {
    changeStateA(state, action: PayloadAction<string>) {
      state.stateA = action.payload;
    },
    changeStateB(state, action: PayloadAction<string>) {
      state.objectB.stateC = action.payload;
    },
    changeStateC(state, action: PayloadAction<number>) {
      state.objectB.stateD = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(changeStateF.fulfilled, (state, action) => {
      state.objectB.objectE.stateF = action.payload;
    });
  },
});
