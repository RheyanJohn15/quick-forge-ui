<template>
  <div class="about">
    <h1 class="text-6xl text-red-600">This is an about page</h1>
    <Button label="Save" :loading="false" @click="test" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import api from '@/api'

onMounted(async () => {
  api.test()
})

function test() {
  api.post()
}
</script>
