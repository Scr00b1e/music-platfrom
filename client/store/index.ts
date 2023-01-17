import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { reducer, RootState } from "./reducers";

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });