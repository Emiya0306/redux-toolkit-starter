import { AsyncThunk, AsyncThunkPayloadCreator, Dispatch } from '@reduxjs/toolkit';

import { RootState } from './store';

declare module '@reduxjs/toolkit' {
  // https://stackoverflow.com/questions/64793504/cannot-set-getstate-type-to-rootstate-in-createasyncthunk
  type AsyncThunkConfig = {
    state?: unknown;
    dispatch?: Dispatch;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
  };

  function createAsyncThunk<
    Returned,
    ThunkArg = void,
    ThunkApiConfig extends AsyncThunkConfig = {
      state: RootState;
    },
  >(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    ThunkApiConfig
    >,
    options?: any
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
}

export {};
