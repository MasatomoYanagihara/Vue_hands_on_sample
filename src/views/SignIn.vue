<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <My-example v-model="parentValue" @custom-event="customEventHandler" />
      <!-- v-modelは以下のように書き換えることができる -->
      <!-- <my-example :value="parentValue" @input="parentValue = $event" /> -->
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
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

export default defineComponent({
  setup(prop, context) {
    const state = reactive({
      parentValue: {
        foo: 'foo',
        bar: 'bar',
      },
    });
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
    const customEventHandler = value => {
      console.log('value: ', value);
    };

    return {
      ...toRefs(state),
      signIn,
      customEventHandler,
    };
  },
});
</script>
