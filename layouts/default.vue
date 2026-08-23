<script setup>
const { event, formattedDate, registration } = await useGenericEvent();

const activeModal = ref(false);
const showNavigation = ref(false);

useSeoMeta({
  ogImage: event.url + "/og.jpg",
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
          <img :src="'/qr-code.svg'" />
        </p>
      </div>
    </div>
    <a
      class="is-hidden-desktop"
      @click="activeModal = true"
      style="position: fixed; right: 0px; bottom: 0px"
      ><img
        :src="'/qr-code.svg'"
        style="opacity: 0.1; height: 20px; margin: 10px"
    /></a>

    <slot />

    <CompetitionsFooter :event="event" />
  </div>
</template>

<style>
@import url("bulma");
</style>
