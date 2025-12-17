import type { State } from './store.ts';

export type Selector = (state: State) => any;
