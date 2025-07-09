<script setup>
import InterestForm from './components/InterestForm.vue';

const { event, formattedDate, registration } = await useEvent();

const activeModal = ref(false);

useSeoMeta({
  ogImage: "/og.jpg",
  ogTitle: event.name,
  ogDescription: event.description + " @ " + formattedDate,
});

useHead({
  titleTemplate: (pageTitle) => [pageTitle, event.name].filter(Boolean).join(" | "),
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "apple-mobile-web-app-title", content: event.name },
  ],
  script: [
    {
      src: "https://plausible.io/js/script.js",
      "data-domain": "fire-trail-nesselwang.de",
      defer: true,
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(event)
    }
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});
</script>

<template>
  <div>
    <div class="modal" :class="{ 'is-active': activeModal }" @click="activeModal = false">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image">
          <img src="/qr-code.svg" />
        </p>
      </div>
    </div>
    <a
      class="is-hidden-desktop"
      @click="activeModal = true"
      style="position: fixed; right: 0px; bottom: 0px"
      ><img src="/qr-code.svg" style="opacity: 0.1; height: 20px; margin: 10px"
    /></a>

    <section
      class="section"
      style="
        min-height: 50vh;
        background-image: url(/images/hero.jpg);
        background-size: cover;
        background-position: 40% 60%;
      "
    >
      <div class="container is-max-desktop">
        <div class="columns">
          <div class="column is-3 is-half-mobile">
            <a href="/"><img src="/fire-trail-nesselwang.svg" alt="Logo Fire Trail Nesselwang"></a>
          </div>
        </div>
      </div>
    </section>

    <NuxtPage />

    <PartnerGrid />

    <footer class="footer">
      <div class="container is-max-desktop">
        <div class="columns">

          <div class="column">
            <div class="columns is-mobile">
              <div class="column is-4"><img src="/images/stefan.jpg" alt="Bild Stefan Matheis"></div>
              <div class="column">
                <p>Fragen? Anregungen? Presse. Sponsoring.</p>
                <p class="mt-4">
                  <strong>Stefan Matheis</strong><br>
                  <a href="mailto:stefan.matheis@fire-trail-nesselwang.de">✉️ stefan.matheis@fire-trail-nesselwang.de</a><br>
                  <a href="tel:004916097048114">📞 +49 160 970 48 114</a></p>
              </div>
            </div>
          </div>
          <div class="column competitions">
            <div class="columns is-mobile">
              <div class="column">
                <img src="/images/fire-trail-nesselwang.svg" alt="Logo Fire Trail Nesselwang">
                <p class="has-text-centered">
                  <span>Fire Trail</span>
                  <span>Nesselwang</span>
                  <span class="has-text-grey-light">(Organisator)</span>
                </p>
              </div>
              <div class="column">
                <a href="https://www.schachmatt-ulm.de">
                <img src="/images/schachmatt-ulm.svg" alt="Logo Schachmatt Ulm">
                <p class="has-text-centered">
                  <span>Schachmatt</span>
                  <span>Ulm</span>
                  <span class="has-text-grey-light">(Organisator)</span>
                </p>
                </a>
              </div>
              <div class="column">
                <a href="https://www.schanzenlauf-oberstdorf.de">
                <img src="/images/schanzenlauf-oberstdorf.svg" alt="Logo Schanzenlauf Oberstdorf">
                <p class="has-text-centered">
                  <span>Schanzenlauf</span>
                  <span>Oberstdorf</span>
                  <span class="has-text-grey-light">(Initiator)</span>
                </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<style>
@import url("bulma");

:root {
  --bulma-success-h: 119;
  --bulma-success-s: 52%;
  --bulma-success-l: 44%;

  --bulma-info-h: 203;
  --bulma-info-s: 65%;
  --bulma-info-l: 53%;
}
</style>

<style scoped>
.competitions span {
  display: block;
}
.competitions img {
  filter: grayscale(1);
}
</style>