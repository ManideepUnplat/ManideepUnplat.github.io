import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { YourTabsTypes } from '../types';

const initialState: any = {
  pattern: "",
  showTabs: JSON.parse(`${localStorage.getItem("tabs")}`),
  searchData: [],
  data: [],
  isEdit: false,
  isLoggedIn: localStorage.getItem("token")!==null
};

export default createReducer(initialState, (builder) => {
  builder.addCase(
    YourTabsTypes.ACTION.GET_TABS,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data)
        return {
          ...state,
          data: action.payload.data
        };
      return {
        ...state,
        error: action.payload.message
      };
    }
  );

  builder.addCase(
    YourTabsTypes.ACTION.POST_TAB,
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
    YourTabsTypes.ACTION.POST_HEAD,
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
    YourTabsTypes.ACTION.SEARCH_TABS,
    (state, action: PayloadAction<any>) => {
      let newData : any[] = [];
      action.payload.reduxState.data.forEach((e: any, i: number) => {
        let newTabs : any[] = []
        e.tabs.forEach((t: any,i: number)=>{
          if(t.task.toLowerCase().includes(action.payload.pattern.toLowerCase()))
            newTabs.push(t)
        })
        const newE={
          ...e,
          tabs: newTabs
        }
        newData.push(newE)
      });
      
      return {
        ...state,
        searchData: newData,
        pattern: action.payload.pattern
      };
    }
  );

  builder.addCase(
    YourTabsTypes.ACTION.GET_VIEW_TABS,
    (state, action: PayloadAction<any>) => {
      
      return {
        ...state,
        showTabs: action.payload.data
      };
    }
  );

  builder.addCase(
    YourTabsTypes.ACTION.CHANGE_EDIT,
    (state, action: PayloadAction<any>) => {
      
      return {
        ...state,
        isEdit: action.payload.data
      };
    }
  );
  
  builder.addCase(
    YourTabsTypes.ACTION.EDIT_TAB,
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
    YourTabsTypes.ACTION.DELETE_TAB,
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
    YourTabsTypes.ACTION.CHANGE_LOGGEDIN,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data!==undefined)
        return {
          ...state,
          isLoggedIn : action.payload.data
        };
      return {
        ...state,
        error: action.payload.message
      };
    }
  );

});
