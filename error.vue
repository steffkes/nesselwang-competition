<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="container is-max-desktop">
        <h1 class="title">Fehler {{ error?.statusCode }}</h1>
        <p class="subtitle">Hast du dich verlaufen?</p>
        <button @click="handleError" class="button">
          Bring mich zur Startseite
        </button>
        <p v-if="error?.statusMessage" class="mt-6 has-text-grey-lighter">
          {{ error.statusMessage }}
        </p>
      </div>
    </section>
  </NuxtLayout>
</template>
