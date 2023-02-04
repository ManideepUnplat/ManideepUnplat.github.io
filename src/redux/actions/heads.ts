import fetchHandler, { FetchOptions } from '../../common-utils/fetchHandler';
import { HeadTypes } from '../types';

// Base URLs of the microservices being used (Set/Update this URL in ".env" file)...
const baseUrl = process.env.MSV_YOURTABS;
// const baseUrl="http://localhost:3000"

export const editHead = ( 
  payload: {
    headId: number,
    headName: string
  },
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
  ) => {
  const fetchOptions : FetchOptions = {
    url: `${baseUrl}/heads/updateHeads`,
    method: 'POST',
    body: JSON.stringify(payload),
    actionType: HeadTypes.ACTION.EDIT_HEAD
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const deleteHead = (
  headId : any,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
  ) => {
  const fetchOptions : FetchOptions = {
    url: `${baseUrl}/heads/deleteHead/${headId}`,
    method: 'DELETE',
    actionType: HeadTypes.ACTION.DELETE_HEAD
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};