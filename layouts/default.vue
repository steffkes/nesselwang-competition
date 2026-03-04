<script setup>
const { event, formattedDate, registration } = await useEvent();

const activeModal = ref(false);
const showNavigation = ref(false);

useSeoMeta({
  ogImage: "/og.jpg",
  description: event.description + " @ " + formattedDate,
});

useHead({
  titleTemplate: (pageTitle) =>
    [pageTitle, event.name].filter(Boolean).join(" | "),
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "apple-mobile-web-app-title", content: event.name },
  ],
  script: [
    {
      src: "/pl/script.js",
      "data-api": "/pl/event",
      "data-domain": "fire-trail-nesselwang.de",
      defer: true,
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(event),
    },
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
    <div
      class="modal"
      :class="{ 'is-active': activeModal }"
      @click="activeModal = false"
    >
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
            <a href="/"
              ><img
                src="/fire-trail-nesselwang.svg"
                alt="Logo Fire Trail Nesselwang"
            /></a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container is-max-desktop">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a
              @click="showNavigation = !showNavigation"
              class="navbar-burger"
              :class="{
                'is-active': showNavigation,
              }"
              role="button"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            class="navbar-menu"
            :class="{ 'is-active': showNavigation, 'mb-6': showNavigation }"
          >
            <div class="navbar-start">
              <a href="/" class="navbar-item"> Startseite </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link"> Wettkampf </a>

                <div class="navbar-dropdown">
                  <a href="/wettkampf/zeitplan" class="navbar-item">
                    Zeitplan
                  </a>
                  <a href="/wettkampf/regeln" class="navbar-item"> Regeln </a>
                  <a href="/wettkampf/strecke" class="navbar-item"> Strecke </a>
                  <a href="/wettkampf/impressionen" class="navbar-item">
                    Impressionen
                  </a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link"> Teilnehmende </a>

                <div class="navbar-dropdown">
                  <a href="/teilnehmende/unterkunft" class="navbar-item">
                    Unterkunft
                  </a>
                  <a href="/teilnehmende/ausflugsziele" class="navbar-item">
                    Ausflugsziele
                  </a>
                </div>
              </div>
            </div>

            <div class="navbar-end is-hidden-mobile">
              <div class="navbar-item">
                <div class="buttons">
                  <a
                    href="//go.fire-trail-nesselwang.de/ergebnisse"
                    class="button is-success"
                    >Ergebnisse 2025</a
                  >
                  <a
                    href="//go.fire-trail-nesselwang.de/impressionen"
                    class="button is-success"
                    >Fotos 2025</a
                  >
                </div>
              </div>
            </div>
          </div>
        </nav>

        <p class="has-text-centered is-hidden-tablet">
          <a
            href="//go.fire-trail-nesselwang.de/ergebnisse"
            class="button is-success"
            >Ergebnisse 2025</a
          >
          <a
            href="//go.fire-trail-nesselwang.de/impressionen"
            class="button is-success ml-2"
            >Fotos 2025</a
          >
        </p>
      </div>
    </section>

    <slot />

    <PartnerGrid />

    <section>
      <div class="container is-max-desktop">
        <p class="has-text-right">
          <a href="/impressum" class="has-text-grey-light">Impressum</a>
        </p>
      </div>
    </section>

    <CompetitionsFooter mail="stefan.matheis@fire-trail-nesselwang.de" />
  </div>
</template>

<style>
@import url("bulma");
</style>
