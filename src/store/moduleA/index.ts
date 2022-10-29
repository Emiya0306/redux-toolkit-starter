import slice from './slice';
import * as asyncAction from './asyncAction';

export const actions = {
  ...slice.actions,
  ...asyncAction,
};

export default slice;
