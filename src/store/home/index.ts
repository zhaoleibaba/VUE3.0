import Vuex from 'vuex';
import { Commit } from 'vuex';
import { State } from '@/store/interface';
import service from '@/api/index';

interface PostData {
    city: any;
}
const state: State = {
    count: 0,
    test: [],
    message: 'ss',
};
const getters = {
    // tslint:disable-next-line:no-shadowed-variable
    count: (state: State) => state.count,
};
const mutations = {
    // tslint:disable-next-line:no-shadowed-variable
    INCREMENT(state: State, num: number) {
        state.count += num;
    },
};
const actions = {
    async getResMsg(context: { commit: Commit }, cate: string) {
        const res: any = await service.getHomeData( cate )
            .then((response: any) => response ).catch((err: any) => {
                return err;
            });
        return res;
    },
    async postList(content: {commit: Commit}, params: any) {
        const res: any = await service.post( params ).then((response: any) => {
            return response;
        }).catch((err: any) => {
            return err;
        });
        return res;
    },
};
export default {
    state,
    getters,
    mutations,
    actions,
};
