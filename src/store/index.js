import Vue from 'vue';
import Vuex from 'vuex';
import { profileModule } from '@/store/profile/profile.js';

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: true; 厳格モード（stateがmutation以外で変更されたことを検出できる）
  // 監視を行う為のオーバーヘッドがかかりパフォーマンスが低下する恐れがあるので開発時のみ有効にする。
  strict: true,
  modules: {
    profile: profileModule,
  },
});
