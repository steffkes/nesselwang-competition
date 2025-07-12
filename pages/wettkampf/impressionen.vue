<script setup>
const imageToShow = ref(false);
const showThisImage = (event) => (imageToShow.value = event.target.src);
</script>

<template>
  <div
    class="modal"
    :class="{ 'is-active': imageToShow }"
    @click="imageToShow = false"
  >
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="image">
        <img v-if="imageToShow" :src="imageToShow" />
      </p>
    </div>
  </div>

  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Der erste Eindruck zählt</h1>
      <p class="subtitle">
        Impressionen vom Wasserfallweg, der Bayernkurve & vom Ziel
      </p>

      <div class="columns is-2">
        <div class="column">
          <div class="fixed-grid has-2-cols">
            <div class="grid">
              <div class="cell">
                <figure @click="showThisImage" class="image is-4by3">
                  <img src="/images/ftn/ftn-01.jpg" />
                </figure>
              </div>
              <div class="cell is-row-span-2">
                <figure @click="showThisImage" class="image is-3by4">
                  <img src="/images/ftn/ftn-02.jpg" />
                </figure>
              </div>
              <div class="cell is-row-span-2">
                <figure @click="showThisImage" class="image is-3by4">
                  <img src="/images/ftn/ftn-03.jpg" />
                </figure>
              </div>
              <div class="cell">
                <figure @click="showThisImage" class="image is-4by3">
                  <img src="/images/ftn/ftn-04.jpg" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="fixed-grid has-2-cols">
            <div class="grid">
              <div class="cell">
                <figure @click="showThisImage" class="image is-4by3">
                  <img src="/images/ftn/ftn-06.jpg" />
                </figure>
              </div>
              <div class="cell is-row-span-2">
                <figure @click="showThisImage" class="image is-3by4">
                  <img src="/images/ftn/ftn-05.jpg" />
                </figure>
              </div>
              <div class="cell is-row-span-2">
                <figure @click="showThisImage" class="image is-3by4">
                  <img src="/images/ftn/ftn-07.jpg" />
                </figure>
              </div>
              <div class="cell">
                <figure @click="showThisImage" class="image is-4by3">
                  <img src="/images/ftn/ftn-08.jpg" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-2">
        <div class="column">
          <div class="fixed-grid has-2-cols">
            <div class="grid">
              <div class="cell">
                <figure @click="showThisImage" class="image is-4by3">
                  <img src="/images/ftn/ftn-09.jpg" />
                </figure>
              </div>
              <div class="cell is-row-span-2">
                <figure @click="showThisImage" class="image is-3by4">
                  <img src="/images/ftn/ftn-11.jpg" />
                </figure>
              </div>
              <div class="cell is-row-span-2">
                <figure @click="showThisImage" class="image is-3by4">
                  <img src="/images/ftn/ftn-12.jpg" />
                </figure>
              </div>
              <div class="cell">
                <figure @click="showThisImage" class="image is-4by3">
                  <img src="/images/ftn/ftn-10.jpg" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="fixed-grid has-2-cols">
            <div class="grid">
              <div class="cell">
                <figure @click="showThisImage" class="image is-4by3">
                  <img src="/images/ftn/ftn-13.jpg" />
                </figure>
              </div>
              <div class="cell is-row-span-2">
                <figure @click="showThisImage" class="image is-3by4">
                  <img src="/images/ftn/ftn-14.jpg" />
                </figure>
              </div>
              <div class="cell is-row-span-2">
                <figure @click="showThisImage" class="image is-3by4">
                  <img src="/images/ftn/ftn-15.jpg" />
                </figure>
              </div>
              <div class="cell">
                <figure @click="showThisImage" class="image is-4by3">
                  <img src="/images/ftn/ftn-16.jpg" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
