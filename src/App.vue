<template>
  <v-app>
    <v-content>
      <v-container fluid pt-0>
        <Router-view />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
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
