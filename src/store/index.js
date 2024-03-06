import { createStore } from "vuex";

import coachesModule from './modules/coaches/index.js';
import requestsModel from './modules/requests/index.js';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModel
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;