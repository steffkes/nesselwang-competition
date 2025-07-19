<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout name="default">
    <div>
      <h2>Fehler {{ error?.statusCode }}</h2>
      <button @click="handleError">Bring mich zur Startseite</button>
      <p v-if="error?.statusMessage">{{ error.statusMessage }}</p>
    </div>
  </NuxtLayout>
</template>
