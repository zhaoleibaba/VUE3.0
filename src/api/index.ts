import request from '@/utils/request';
// import { AjaxResponse } from '../types/ajax';

export const Ajax = {
    get: (cate: string) => {
        return request({
            url: '/api/movie/' + cate ,
            method: 'GET',
        });
    },
    post: (params: string) => {
        return request({
            url: '/api/movie/' ,
            method: 'GET',
            params,
        });
    },
};
