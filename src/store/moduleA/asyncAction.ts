/* eslint-disable @typescript-eslint/default-param-last */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const changeStateF = createAsyncThunk(
  'moduleA/changeStateF',
  (value: boolean | undefined, { getState }) => {
    const state = getState();

    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(value ?? !state.moduleA.objectB.objectE.stateF);
      }, 1000);
    });
  },
);
