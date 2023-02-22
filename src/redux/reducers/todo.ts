import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { TodoTypes } from '../types';

const initialState: any = {
  email:"",
  showLogout: false,
  addedEmail: false
};

export default createReducer(initialState, (builder) => {
  
  builder.addCase(
    TodoTypes.ACTION.GET_PROJECTS,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data)
        return {
          ...state,
          todos: action.payload.data
        };
      return {
        ...state,
        error: action.payload.message
      };
    }
  );
  
  builder.addCase(
    TodoTypes.ACTION.POST_PROJECTS,
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
    TodoTypes.ACTION.LOGIN,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data)
        return {
          ...state,
          email: action.payload.data[0]
        };
      return {
        ...state,
        error: action.payload.message
      };
    }
  );
  
  builder.addCase(
    TodoTypes.ACTION.SHOW_LOGOUT,
    (state, action: PayloadAction<any>) => {
      return {
        ...state,
        showLogout: action.payload
      };
    }
  );
  
  builder.addCase(
    TodoTypes.ACTION.ADDED_EMAIL,
    (state, action: PayloadAction<any>) => {
      return {
        ...state,
        addedEmail: action.payload
      };
    }
  );

  builder.addCase(
    TodoTypes.ACTION.GET_WORKSPACES,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data)
        return {
          ...state,
          workspaces: action.payload.data
        };
      return {
        ...state,
        error: action.payload.message
      };
    }
  );

});