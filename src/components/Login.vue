<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmitHandler" class="q-gutter-md">
      <q-input filled v-model="userData.username" label="Username" />
      <q-input
        filled
        v-model="userData.password"
        label="Password"
        type="password"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { LoginModel } from 'src/models';
import { defineComponent, reactive } from 'vue';
import { AuthService } from 'src/api';

export default defineComponent({
  name: 'LoginComponent',

  setup() {
    const userData: LoginModel = reactive({
      password: '',
      username: '',
    });

    const onSubmitHandler = () => {
      AuthService.login(userData)
        .then(() => {
          alert('Login successfully');
        })
        .catch((err) => {
          alert(err);
        });
    };

    return {
      onSubmitHandler,
      userData,
    };
  },
});
</script>
