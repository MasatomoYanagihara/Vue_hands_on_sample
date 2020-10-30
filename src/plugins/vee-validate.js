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
extend('userNameAllowedCharacters', {
  // {_field_}にはValidationProviderのnameプロパティで指定した値が入る。
  message: '{_field_}は英字、数字、「_」のみ使用できます。',
  validate: value => {
    return /^[0-9A-Z_]*$/i.test(value);
  },
});

// 日本語ローカライズ
localize('ja', ja);

// バリデーション用コンポーネントをグローバルコンポーネントとして登録
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
