import React from 'react';
import { Loader } from './lib';
import { LoaderProvider } from './lib/LoaderProvider';

function App() {
  return (
    <LoaderProvider defaultStyle={{ color: 'red', size: 'lg' }}>
      <div>
        <Loader isLoading={true} size="xxl" color="blue" />
        <Loader />
      </div>
    </LoaderProvider>
  );
}

export default App;
