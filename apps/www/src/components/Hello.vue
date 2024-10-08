<script setup>
import { ref } from 'vue'
const message = ref('Hello World!')
</script>

<template>
  <div class="text-red-300 text-3xl">{{ message }}</div>
</template>
