<script setup>
const { event, formattedDate } = await useEvent();

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
      "data-domain": "nesselwang-competition.vercel.app",
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
        background-position: 50% 65%;
      "
    >
    <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
            <a href="/">Nesselwang Competition</a>
          </div>
        </div>
    </div>
    </section>

    <section class="section">
      <div class="container">
        <!--
        <div class="notification is-primary">
          This container is <strong>centered</strong> on desktop and larger viewports.
        </div>
        -->

        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Steigung bis zu</p>
              <p class="title">30%</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Distanz</p>
              <p class="title">3'700m</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Höhenunterschied</p>
              <p class="title">530m</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Zieleinlauf auf</p>
              <p class="title">1'500m</p>
            </div>
          </div>
        </nav>

        <div style="position:relative; width:100%; height:0px; padding-bottom:56.250%">
          <iframe allow="fullscreen;autoplay" allowfullscreen height="100%"
            src="https://streamable.com/e/sksaz8?autoplay=1&loop=0" width="100%"
            style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;">
          </iframe>
        </div>

      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="columns">

          <div class="column">
            <div class="columns">
              <div class="column is-4"><img src="/images/stefan.jpg" alt="Bild Stefan Matheis"></div>
              <div class="column">
                <p>Fragen? Anregungen? Presse. Sponsoring.</p>
                <p class="mt-4"><strong>Stefan Matheis</strong><br><a href="mailto:stefan@mathe.is">✉️
                    stefan@mathe.is</a><br><a href="tel:004916097048114">📞 +49 160 970 48 114</a></p>
              </div>
            </div>
          </div>
          <div class="column competitions">
            <div class="columns">
              <div class="column">
                <img src="/images/competition-nesselwang.svg" alt="Logo Competition Nesselwang">
                <p class="has-text-centered">
                  <span>Nesselwang</span>
                  <span>Competition</span>
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
                <img src="/images/schanzenlauf-oberstdorf.svg" alt="Logo Schanzenlauf Oberstdorf">
                <p class="has-text-centered">
                  <span>Schanzenlauf</span>
                  <span>Oberstdorf</span>
                  <span class="has-text-grey-light">(Initiator)</span>
                </p>
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
</style>

<style scoped>
.competitions span {
  display: block;
}
.competitions img {
  filter: grayscale(1);
}
</style>