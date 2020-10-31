<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-text-field v-my-example="exampleHandler" />
      <p class="display-1 py-12">
        サンプルアプリケーションにサインインする
      </p>
      <div>
        <v-btn
          width="300"
          large
          color="#1DA1F2"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with SNS1
        </v-btn>
      </div>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#DD2A7B"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with SNS2
        </v-btn>
      </div>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#3B5998"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with SNS3
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { myExample } from '@/directives/my-example';

export default defineComponent({
  // ディレクティブをローカル登録
  directives: {
    myExample,
  },
  setup(prop, context) {
    const exampleHandler = event => {
      console.log('event.target.value: ', event.target.value);
    };
    /**
     * サインインします。
     */
    const signIn = async () => {
      try {
        await context.root.$store.dispatch('profile/signIn');
        context.root.$router.push('/');
      } catch (error) {
        // 通常はエラーメッセージを表示するなどの処理が必要
        console.log('error: ', error);
      }
    };

    return {
      exampleHandler,
      signIn,
    };
  },
});
</script>
