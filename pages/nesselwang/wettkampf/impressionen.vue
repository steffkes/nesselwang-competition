<script setup>
definePageMeta({
  layout: "nesselwang",
});

useSeoMeta({
  title: "Wettkampf-Impressionen",
  description: "Vom Wasserfallweg, der Bayernkurve & vom Ziel",
});

const containerRef = ref(null);
const slides = ref([
  "/nesselwang/images/impressionen/DSC0620.jpg",
  "/nesselwang/images/impressionen/DSC0669.jpg",
  "/nesselwang/images/impressionen/DSC0680.jpg",
  "/nesselwang/images/impressionen/DSC1390.jpg",
  "/nesselwang/images/impressionen/DSC1399.jpg",
  "/nesselwang/images/impressionen/DSC0764.jpg",
  "/nesselwang/images/impressionen/DSC1080.jpg",
  "/nesselwang/images/impressionen/DSC1616.jpg",
  "/nesselwang/images/impressionen/DSC1767.jpg",
  "/nesselwang/images/impressionen/DSC1941.jpg",
  "/nesselwang/images/impressionen/DSC1988.jpg",
  "/nesselwang/images/impressionen/DSC2035.jpg",
  "/nesselwang/images/impressionen/DSC1715.jpg",
  "/nesselwang/images/impressionen/DSC2053.jpg",
  "/nesselwang/images/impressionen/DJI_20251018122829_0010_D.jpg",
  "/nesselwang/images/impressionen/DSC2117.jpg",
  "/nesselwang/images/impressionen/DSC2152.jpg",
  "/nesselwang/images/impressionen/DSC2167.jpg",
]);

const swiper = useSwiper(containerRef, {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  freeMode: {
    enabled: true,
    momentum: false,
  },
});

onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Der erste Eindruck zählt</h1>
      <p class="subtitle">
        Impressionen vom Wasserfallweg, der Bayernkurve & vom Ziel
      </p>

      <div class="notification is-info">
        <p>
          <a href="//go.fire-trail-nesselwang.de/impressionen"
            >Alle Bilder vom 1. Fire Trail Nesselwang</a
          >, der am Samstag, den 18.10.2025 stattfand.
        </p>
      </div>

      <div class="content">
        <p>
          Eine animierte Darstellung der Strecke
          <NuxtLink href="/nesselwang/wettkampf/strecke"
            >findest du hier</NuxtLink
          >
        </p>
      </div>

      <ClientOnly>
        <div id="wrapper">
          <swiper-container
            ref="containerRef"
            :init="false"
            :pagination="{
              clickable: true,
            }"
          >
            <swiper-slide
              v-for="(slide, idx) in slides"
              :key="idx"
              :style="{
                backgroundImage: `url(${slide})`,
              }"
            >
            </swiper-slide>
          </swiper-container>

          <div id="navigation">
            <a id="prev" @click="swiper.prev()">‹</a>
            <a id="next" @click="swiper.next()">›</a>
          </div>
        </div>
      </ClientOnly>

      <div class="content mt-4">
        <p>
          Eine animierte Darstellung der Strecke
          <NuxtLink href="/nesselwang/wettkampf/strecke"
            >findest du hier</NuxtLink
          >
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="css">
#wrapper,
swiper-slide {
  height: 100vh;
}

@media screen and (max-width: 767px) {
  #wrapper,
  swiper-slide {
    height: 50vh;
  }
}

#wrapper {
  position: relative;
}

swiper-slide {
  background-size: cover;
  background-position: 50% 50%;
}

#navigation a {
  position: absolute;
  color: rgba(255, 255, 255, 0.25);
  top: 0;
  z-index: 5;
  height: 100%;
  width: 50vw;
  font-size: 1000%;
  align-content: center;
}

#navigation a:hover {
  color: rgba(255, 255, 255, 0.75);
}

#wrapper #prev {
  left: 0;
  padding-left: 2vw;
}

#wrapper #next {
  right: 0;
  padding-right: 2vw;
  text-align: right;
}
</style>
