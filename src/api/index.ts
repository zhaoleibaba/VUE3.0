import request from '@/utils/request';
// import { AjaxResponse } from '../types/ajax';

export const Ajax = {
    get: (cate: any) => {
        return request({
            url: '/apis/home/' + cate ,
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
