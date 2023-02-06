import fetchHandler, { FetchOptions } from '../../common-utils/fetchHandler';
import { TodoTypes } from '../types';

// Base URLs of the microservices being used (Set/Update this URL in ".env" file)...
const baseUrl = process.env.MSV_YOURTABS;
// const baseUrl="http://localhost:3000"

export const getProjects = ( 
  uid: number | string,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
  ) => {
  const fetchOptions : FetchOptions = {
    url: `${baseUrl}/project/get-all-projects/${uid}`,
    method: 'GET',
    actionType: TodoTypes.ACTION.GET_PROJECTS
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const postProject = ( 
  payload: any,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
  ) => {
  const fetchOptions : FetchOptions = {
    url: `${baseUrl}/todos/add-todo`,
    method: 'POST',
    body: JSON.stringify(payload),
    actionType: TodoTypes.ACTION.POST_PROJECTS
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};
