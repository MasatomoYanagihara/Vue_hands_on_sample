<template>
  <div>
    <h1>ホーム</h1>
    <p><Router-link to="sign-in">サインイン</Router-link></p>
    <p><button @click="calendar">カレンダー</button></p>
    <p><button @click="profile">プロフィール</button></p>
    <p><button @click="share">共有</button></p>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup(prop, context) {
    // context.root.$routerでVue Routerインスタンスにアクセス
    // push( path, 遷移成功時に呼び出されるコールバック関数（省略可）, 遷移中断時に呼び出されるコールバック関数（省略可） )
    const calendar = () => {
      context.root.$router.push(
        'calendar/month',
        // nameで指定 { name: 'carendar', params: { type: 'month } }
        () => {},
        () => {},
      );
    };
    const profile = () => {
      context.root.$router.push(
        'profile',
        () => {},
        () => {},
      );
    };
    const share = () => {
      context.root.$router.push(
        'share',
        () => {},
        () => {},
      );
    };

    return {
      calendar,
      profile,
      share,
    };
  },
});
</script>
