import type { Action } from './actions.ts';
import type { State } from './store.ts';

/**
 * Редьюсер для обработки действий и изменения состояния.
 */
export type Reducer = (state: State, action: Action) => State;
