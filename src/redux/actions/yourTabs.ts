import fetchHandler, { FetchOptions } from '../../common-utils/fetchHandler';
import { YourTabsTypes } from '../types';

// Base URLs of the microservices being used (Set/Update this URL in ".env" file)...
const baseUrl = process.env.MSV_YOURTABS;
// const baseUrl="http://localhost:3000"

export const getTabs = (
  uid : any,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
  ) => {
  const fetchOptions : FetchOptions = {
    url: `${baseUrl}/heads/get-tabs/${uid}`,
    method: 'GET',
    actionType: YourTabsTypes.ACTION.GET_TABS
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const postTab = ( 
  payload:any,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
  ) => {
  const fetchOptions : FetchOptions = {
    url: `${baseUrl}/tabs/addTab`,
    method: 'POST',
    body: JSON.stringify(payload),
    actionType: YourTabsTypes.ACTION.POST_TAB
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const postHead = ( 
  payload:any,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
  ) => {
  const fetchOptions : FetchOptions = {
    url: `${baseUrl}/heads/addHeads`,
    method: 'POST',
    body: JSON.stringify(payload),
    actionType: YourTabsTypes.ACTION.POST_HEAD
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const search = (reduxState: any,pattern: string) => {
    
  return (dispatch: any) => {
    dispatch({
      type: YourTabsTypes.ACTION.SEARCH_TABS,
      payload: {
        reduxState: reduxState,
        pattern: pattern
      }
    });
  };
};

export const reloadTabs = (showTabs : any) => {
    
  return (dispatch: any) => {
    dispatch({
      type: YourTabsTypes.ACTION.GET_VIEW_TABS,
      payload: {
        data : showTabs
      }
    });
  };
};

export const changeIsEdit = (val : boolean) => {
    
  return (dispatch: any) => {
    dispatch({
      type: YourTabsTypes.ACTION.CHANGE_EDIT,
      payload: {
        data : val
      }
    });
  };
};

export const changeIsLoggedIn = (val : boolean) => {
    
  return (dispatch: any) => {
    dispatch({
      type: YourTabsTypes.ACTION.CHANGE_LOGGEDIN,
      payload: {
        data : val
      }
    });
  };
};


export const editTab = ( 
  payload:any,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
  ) => {
  const fetchOptions : FetchOptions = {
    url: `${baseUrl}/tabs/updateTab`,
    method: 'POST',
    body: JSON.stringify(payload),
    actionType: YourTabsTypes.ACTION.EDIT_TAB
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const deleteTabs = (
  tabId : any,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
  ) => {
  const fetchOptions : FetchOptions = {
    url: `${baseUrl}/tabs/deleteTab/${tabId}`,
    method: 'DELETE',
    actionType: YourTabsTypes.ACTION.DELETE_TAB
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};