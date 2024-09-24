import {request} from '../utils/request';
import API from '../config/api';

export const trendingService = {
    getData(params) {
      return request.get(API.TRENDING, params);
    },
    getRecentData(params) {
      return request.get(API.RECENT_VIEW, params);
    }
}
