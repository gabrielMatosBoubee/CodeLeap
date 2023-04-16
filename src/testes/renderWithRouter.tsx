import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../redux';

const renderWithRouter = (component: any) => {
  const history = createMemoryHistory();
  return ({
    
    ...render(
     <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <Router history={ history }>{component}</Router>
      </Provider>
      </QueryClientProvider>
      ), history,
  });
};

export default renderWithRouter;