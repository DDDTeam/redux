import type { Action } from '@/types/actions.ts';
import type { Reducer } from '@/types/reducers.ts';
import type { State } from '@/types/store.ts';

/**
 * Комбинирует несколько редьюсеров в один.
 */
export function combineReducers(reducersMap: Record<string, Reducer>): Reducer {
	return function combinationReducer(state: State = {}, action: Action) {
		const nextState: State = {};
		Object.entries(reducersMap).forEach(([key, reducer]) => {
			nextState[key] = reducer(state[key], action);
		});

		return nextState;
	};
}
