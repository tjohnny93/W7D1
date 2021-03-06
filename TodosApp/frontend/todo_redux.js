import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import { fetchTodos } from './actions/todo_actions';
// import fetchTodos from './actions/todo_actions';

import Root from './components/Root';

const store = configureStore();
window.store = store;
window.allTodos = allTodos;
window.fetchTodos = fetchTodos;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});
