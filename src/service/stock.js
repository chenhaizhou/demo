import {request} from '../utils/request';
import API from '../config/api';

export const stockService = {
    getData(params) {
      return request.get(API.STOCK, params);
    }
}
