import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import {  legacy_createStore as createStore } from 'redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import reducer from '../redux/reducers';
// import store from '../redux';

const state = {nickname: {nickname: 'string'}, pagination: {page: 1}}

const renderWithRouter = (component: any, initialState = state) => {
  const store = createStore(reducer, initialState as any);
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