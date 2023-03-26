import axios from 'axios';
import { SetStateAction } from 'react';
const url = 'http://localhost:8080/api/';

export const getRequestforState = (setState: SetStateAction<any | null>, endpoint: string) => {
  let data: any;
  axios.get(url + endpoint).then((response) => {
    data = response.data;
    setState(data);
  });
};
export const postDataRequest = async (data: any, endpoint: string) => {
  let res: any;
  await axios({
    method: 'POST',
    url: url + endpoint,
    data: data,
  }).then((response) => {
    res = response.data;
    console.log(res);
  });

  return res;
};
export const postParamsRequest = async (endpoint: string, params: string) => {
  let res: any;
  await axios({
    method: 'POST',
    url: url + endpoint + '/' + params,
  }).then((response) => {
    res = response.data;
    console.log(res);
  });

  return res;
};
