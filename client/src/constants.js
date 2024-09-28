// Game Settings
export const MIN_WIDTH = 5;
export const MAX_WIDTH = 20;
export const MIN_HEIGHT = 5;
export const MAX_HEIGHT = 20;
export const MIN_MINES = 5;

// Design Settings
export const CELL_SIZE = 82;
export const CELL_MARGIN = 6;

// Game States
export const GAME = {
	READY: 'ready',
	RUN: 'run',
	WIN: 'win',
	LOSE: 'lose'
};

// Cell States
export const CODES = {
	OPENED: 0,
	NOTHING: -1,
	FLAG: -2,
	QUESTION: -3,
	MINE: -4,
	MINE_FLAG: -5,
	MINE_QUESTION: -6
};