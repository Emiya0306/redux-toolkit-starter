import React from 'react';
import { Provider } from 'react-redux';
import { getStore } from '@src/store';
import CompA from '@src/components/CompA';
import CompB from '@src/components/CompB';

import Layout from '../Layout';

export function App() {
  return (
    <Provider store={getStore()}>
      <Layout>
        <CompA />
        <CompB />
      </Layout>
    </Provider>
  );
}

export default React.memo(App);
