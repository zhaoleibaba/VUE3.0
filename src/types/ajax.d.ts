// declare namespace Ajax {
// export interface AxiosResponse {    data: AjaxResponse
// }

// export interface AjaxResponse {
//     code: number;
//     data: any;
//     message: string;
// }
declare namespace Ajax {
    export interface AxiosResponse { // axios 返回数据  
        data: AjaxResponse
    }
  
    export interface AjaxResponse {
        code: number,
        data: object | null | Array<any>,
        message: string
    }
}