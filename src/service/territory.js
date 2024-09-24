import {request} from '../utils/request';
import API from '../config/api';

export const territoryService = {
    getData(params) {
      return request.get(API.TERRITORY, params);
    }
}
