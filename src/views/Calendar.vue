<template>
  <div>
    <h1>カレンダー[{{ type.hoge }}]</h1>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    // path: '/calendar/:type'の:より後ろの部分と合わす
    type: {
      required: true,
      validator: value => {
        return ['month', 'week', 'day'].includes(value);
      },
    },
  },
});
</script>
