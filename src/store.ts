/** @format */

import { createStore } from 'redux';
import reducer from './reducer';

// TODO: create a store creator
const makeStore = (initialState) => createStore(reducer, initialState);
