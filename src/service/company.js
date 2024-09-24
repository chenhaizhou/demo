import {request} from '../utils/request';
import API from '../config/api';

export const companyService = {
    getData(params) {
      return request.get(`${API.COMPANY}/${params}`);
    }
}
