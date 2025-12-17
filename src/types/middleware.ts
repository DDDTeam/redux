import type { Dispatch } from './actions.ts';
import type { State } from './store.ts';

/**
 * API для middleware.
 */
export type MiddlewareAPI = {
	dispatch: Dispatch;
	getState: () => State;
};

/**
 * Middleware для Redux.
 */
export type Middleware = (middlewareAPI: MiddlewareAPI) => any;
