import Vue from 'vue';
import Vuex from 'vuex';
import { profileModule } from '@/store/profile/profile.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profile: profileModule,
  },
});
