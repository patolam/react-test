import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './core/components/Layout/Layout';

const App = () => {
  return (
    <React.Suspense fallback={<span>loading...</span>}>
      <Router>
        <Layout />
      </Router>
    </React.Suspense>
  );
}

export default App;
