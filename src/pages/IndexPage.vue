<template>
  <q-page class="row items-center justify-evenly">
    <login-component></login-component>
  </q-page>
</template>

<script lang="ts">
import LoginComponent from 'components/Login.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { LoginComponent },
});
</script>
