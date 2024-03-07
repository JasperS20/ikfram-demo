import { createStore } from "vuex";

import coachesModule from './modules/coaches/index.js';
import requestsModel from './modules/requests/index.js';
import authModel from './modules/auth/index.js';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModel,
        auth: authModel
    },
});

export default store;