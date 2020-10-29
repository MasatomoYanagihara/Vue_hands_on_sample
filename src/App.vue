<template>
  <div id="app">
    <Router-view />
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import FooterComponent from '@/components/Footer.vue';

export default defineComponent({
  components: {
    Footer: FooterComponent,
  },
});
</script>
