import type { Action } from './actions.ts';
import type { Reducer } from './reducers.ts';

/**
 * Состояние Redux store.
 */
export type State = Record<string, any>;

/**
 * Интерфейс Redux store.
 */
export type Store = {
	getState: () => State;
	dispatch: (action: Action) => void;
	subscribe: (listener: VoidFunction) => VoidFunction;
};

export type StoreEnhancer = (
	createStore: (reducer: Reducer, initialState: State) => Store,
) => (reducer: Reducer, initialState: State) => Store;
