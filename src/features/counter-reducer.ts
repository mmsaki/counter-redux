import { createReducer, createAction } from '@reduxjs/toolkit';

type CounterState = { count: number };

const increment = createAction('INCREMENT', (amount: number) => {
  return {
    payload: amount,
  };
});

const decrement = createAction('DECREMENT', (amount: number) => {
  return {
    payload: amount,
  };
});

const reset = createAction('RESET');

type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

const counterReducer = createReducer({ count: 0 }, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.count += action.payload;
  });

  builder.addCase(decrement, (state, action) => {
    state.count -= action.payload;
  });

  builder.addCase(reset, (state, action) => {
    state.count = 0;
  });
});
