import Vue from 'vue';
import {
  configure,
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja';
import { required, max } from 'vee-validate/dist/rules';

// 設定
const config = {
  // すべてのバリデーションルールを検証
  bails: false,
  // input, blurのタイミングでバリデーションを実行。
  mode: 'aggressive',
};
configure(config);

// バリデーションルールの登録
extend('required', required);
extend('max', max);

// 日本語ローカライズ
localize('ja', ja);

// バリデーション用コンポーネントをグローバルコンポーネントとして登録
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
