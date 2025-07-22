<script setup>
const { registration } = await useEvent();
</script>

<template>
  <div>
    <section class="section my-6">
      <div class="container is-max-desktop">
        <div class="content">
          <p class="has-text-centered">
            Der <strong>Fire Trail Nesselwang</strong> findet statt am
            <strong>Samstag, 18.10.25</strong> an der
            <strong>Alpspitzbahn Nesselwang</strong>.
          </p>
          <p class="has-text-centered">
            <NuxtLink href="/anmeldung" class="button is-success is-medium"
              >Ich will einen der
              <span class="tag is-white mx-1">{{ registration.slots }}</span>
              Startplätze!</NuxtLink
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
