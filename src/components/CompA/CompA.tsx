import React, { useEffect } from 'react';
import { useAppSelector } from '@src/store';

export function CompA() {
  const stateA = useAppSelector((state) => state.moduleA.stateA);
  const stateF = useAppSelector((state) => state.moduleA.objectB.objectE.stateF);

  useEffect(() => {
    console.log('CompA Updated!');
  });

  return (
    <>
      <div>
        {`State A: ${String(stateA)}`}
      </div>
      <div>
        <span>State F:</span>
        {String(stateF)}
      </div>
    </>
  );
}

export default React.memo(CompA);
