import request from '@/utils/request';

const service = {
    getHomeData: (cate: any) => {
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
export default service;
