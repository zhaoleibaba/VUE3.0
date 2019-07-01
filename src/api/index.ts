import request from '@/utils/request';

// tslint:disable-next-line:only-arrow-functions
export const get = function(cate: string) {
    return request({
        url: '/api/movie/' + cate ,
        method: 'GET',
    });
};
// tslint:disable-next-line:only-arrow-functions
export const post = function(params: string) {
    return request({
        url: '/api/movie/' ,
        method: 'GET',
        params,
    });
};
