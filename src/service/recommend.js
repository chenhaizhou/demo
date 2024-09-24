import {request} from '../utils/request';
import API from '../config/api';

export const recommendService = {
    getData(params) {
      return request.get(API.RECOMMEND, params);
    },
    getNewsData(params) {
      return request.get(API.NEWS, params);
    }
}
