

<template>
  <main
    class="w-full flex-col h-screen bg-gradient-to-r from-green-900 via-green-700 to-green-500 dark:from-emerald-900 dark:via-emerald-700 dark:to-emerald-500 flex items-center justify-center">

    <div class="card bg-white/60 backdrop-blur-3xl p-8 w-1/3 rounded-md">
     <div class="w-full flex flex-col justify-center items-center">
      <img :src="'/bg-3.png'" alt="Logo">
     </div>
      <div class="flex flex-col mt-8 gap-4 w-full">
        <div class="flex flex-col gap-2">
          <label for="username">Username</label>
          <InputText id="username" placeholder="admin" v-model="email" aria-describedby="username-help" />
          <Message v-if="false" size="small" severity="error" variant="simple">You must enter a username
          </Message>
        </div>
        <div class="flex flex-col gap-2">
          <label for="password">Password</label>
          <InputText id="password" v-model="password" placeholder="*********" aria-describedby="password-help" />
          <Message v-if="false" size="small" severity="error" variant="simple">Enter your username to reset your password.
          </Message>
        </div>
        <Divider />
        <Button @click="login" :loading="loginLoading" label="Login" />
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import { useAuth } from "@/api/auth.js";
import { useRouter } from "vue-router";
import { notify } from "@/utils/notif.js";
import { useToast } from 'primevue/usetoast';

const auth = useAuth();
const toast = useToast();
const router = useRouter();

const loginLoading = ref(false);
const email = ref('');
const password = ref('');

async function login() {
  loginLoading.value = true;
  
  const data = {
    'email' : email.value,
    'password': password.value
  }

  const res = await auth.login(data);

  loginLoading.value = false;
  console.log(res);
  if(res.success){
    localStorage.setItem('api_token', res.data.api_token);
    router.push('/');
  }else{
    notify(res, toast);
  }
}
</script>
