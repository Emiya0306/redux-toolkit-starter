import React, { useCallback, useEffect } from 'react';
import { moduleAActions, useAppDispatch } from '@src/store';

export function CompB() {
  const dispatch = useAppDispatch();

  const changeStateA = useCallback(() => {
    dispatch(moduleAActions.changeStateA(`string A ${Math.random()}`));
  }, [dispatch]);

  const toggleStateF = useCallback(() => {
    dispatch(moduleAActions.changeStateF(undefined));
  }, [dispatch]);

  const changeStateF = useCallback(() => {
    dispatch(moduleAActions.changeStateF(true));
  }, [dispatch]);

  useEffect(() => {
    console.log('CompB Updated!');
  });

  return (
    <>
      <button type="button" onClick={changeStateA}>Change State A</button>
      <button type="button" onClick={toggleStateF}>Toggle State F</button>
      <button type="button" onClick={changeStateF}>Change State F True</button>
    </>
  );
}

export default React.memo(CompB);
