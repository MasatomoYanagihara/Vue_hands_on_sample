import Vue from 'vue';
import router from '@/router';
import store from '@/store/index';

export class UnauthorizedHandler {
  static onRejected() {
    return error => {
      if (error?.response?.status === 401) {
        store.dispatch('profile/signOut');
        Vue.prototype.$toast(
          'サインインの有効期限が切れました。もう一度サインインを行ってください。',
        );
        router.push('sign-in');
      }

      return Promise.reject(error);
    };
  }
}
