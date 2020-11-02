import Vue from 'vue';

export class UnprocessableEntityHandler {
  static onRejected() {
    return error => {
      if (error?.response?.status === 422) {
        Vue.prototype.$toast(error.response?.data?.title);
      }

      return Promise.reject(error);
    };
  }
}
