<template>
  <div class="about">
    <h1 class="text-6xl text-red-600">This is an about page</h1>
    <Button label="Save" :loading="true" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
onMounted(async () => {
  axios
    .get('http://127.0.0.1:8000/api/test')
    .then((response) => {
      console.log('Data:', response.data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
})
</script>
