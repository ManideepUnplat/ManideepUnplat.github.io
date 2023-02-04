import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { HeadTypes } from '../types';

const initialState: any = {};

export default createReducer(initialState, (builder) => {
  
  builder.addCase(
    HeadTypes.ACTION.EDIT_HEAD,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data)
        return {
          ...state
        };
      return {
        ...state,
        error: action.payload.message
      };
    }
  );

  builder.addCase(
    HeadTypes.ACTION.DELETE_HEAD,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data)
        return {
          ...state
        };
      return {
        ...state,
        error: action.payload.message
      };
    }
  );

});
