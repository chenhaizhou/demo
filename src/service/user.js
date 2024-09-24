import {request} from '../utils/request';
import API from '../config/api';

export const userService = {
    login(params) {
      return request.post(API.LOGIN, params);
    },
    logout() {
      return request.post(API.LOGIN, null);
    },
    
}
