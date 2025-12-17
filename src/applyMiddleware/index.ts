import { compose } from '../compose';
import type { Action } from '@/types/actions.ts';
import type { Middleware } from '@/types/middleware.ts';
import type { Reducer } from '@/types/reducers.ts';
import type { State, Store, StoreEnhancer } from '@/types/store.ts';

/**
 * Применяет middleware к Redux-подобному store.
 */
export function applyMiddleware(middlewares: Middleware[]): StoreEnhancer {
	return function createStoreWithMiddleware(
		createStore: (reducer: Reducer, initialState: State) => Store,
	) {
		return (reducer: Reducer, initialState: State): Store => {
			const store = createStore(reducer, initialState);

			const middlewareAPI = {
				getState: store.getState,
				dispatch: (action: Action) => store.dispatch(action),
			};

			const chain = middlewares.map((middleware) => middleware(middlewareAPI));
			const enhancedDispatch = compose(...chain)(store.dispatch);

			return {
				...store,
				dispatch: enhancedDispatch,
			};
		};
	};
}
