<script setup>
import InterestForm from './components/InterestForm.vue';

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
            <a href="/"><img src="/fire-trail-nesselwang.svg" alt="Logo Fire Trail Nesselwang"></a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <div class="content">
          <p class="has-text-centered">Save the date! Der <strong>Fire Trail Nesselwang</strong> findet statt am <strong>Samstag, 18.10.25</strong> an der <strong>Alpspitzbahn Nesselwang</strong>.</p>
          <p class="has-text-centered"><a href="#da-simmer-dabei" class="button is-primary">Da will ich dabei sein!</a></p>
        </div>
      
      </div>
    </section>

    <section class="section has-background-info">
      <div class="container">
        <!--
        <div class="notification is-primary">
          This container is <strong>centered</strong> on desktop and larger viewports.
        </div>
        -->

        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Anstrengung garantiert zu</p>
              <p class="title">100%</p>
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

      </div>
    </section>

    <section class="section">
      <div class="container">

        <div class="content">
          <p>Los geht's am Explorer Hotel Nesselwang, den Wasserfallweg entlang ein paar Treppen hinaus - bis man an der Mittelstation der Alpspitzbahn aus dem Wald bricht.
          Dann geht's weiter auf der Teerstraße, durch die bekannte Bayernkurve und einen letzten Anstieg hinauf zur Bergstation.
          Von dort aus ist es nur nur ein Katzensprung ans Sportheim Böck - das Ziel des Fire Trail Nesselwang.</p>

          <p>Schau's dir im Flyover an:</p>
        </div>

        <div class="mb-6" style="position:relative; width:100%; height:0px; padding-bottom:56.250%">
          <iframe allow="fullscreen" allowfullscreen height="100%"
            src="https://streamable.com/e/sksaz8?autoplay=0&loop=0" width="100%"
            style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;">
          </iframe>
        </div>

        <div class="content">

        <p>Du kannst entweder die ganze Strecke im <strong>Einzel</strong> alleine laufen, oder du entscheidest dich das Ganze in der <strong>2er Staffel</strong> zusammen mit einem/einer Anderen in Angriff zu nehmen - liegt ganz bei dir.</p>

        <p>Bei der Staffel läuft die erste Person vom Start bis zur Mitte, die befindet sich an der Mittelstation der Alpspitzbahn.
          Die zweite Person übernimmt dort und läuft den Rest der Strecke bis zum Sportheim Böck - dort befindet sich das Ziel.</p>

        </div>

      </div>
    </section>

    <section class="section" id="da-simmer-dabei">
      <div class="container">

        <InterestForm />

      </div>
    </section>

    <section class="hero is-info">
      <div class="hero-body">
        <p class="title">Für den ersten Eindruck</p>
        <p class="subtitle">Impressionen vom Wasserfallweg, der Bayernkurve & vom Ziel</p>
      </div>
    </section>

     <section class="section">
       <div class="container">
 
        <div class="fixed-grid has-2-cols">
            <div class="grid">
                <div class="cell is-row-span-2">
                <figure class="image is-3by4">
                    <img src="/images/bild-01.jpg" />
                </figure>
                </div>
                <div class="cell">
                <figure class="image is-4by3">
                    <img src="/images/bild-02.jpg" />
                </figure>
                </div>
                <div class="cell is-row-span-2">
                <figure class="image is-3by4">
                    <img src="/images/bild-04.jpg" />
                </figure>
                </div>
                <div class="cell">
                <figure class="image is-4by3">
                   <img src="/images/bild-03.jpg" />
                </figure>
                </div>
                <div class="cell is-col-span-2">
                <figure class="image">
                    <img src="/images/bild-05.jpg" />
                </figure>
                </div>
            </div>
          </div>
 
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="columns">

          <div class="column">
            <div class="columns is-mobile">
              <div class="column is-4"><img src="/images/stefan.jpg" alt="Bild Stefan Matheis"></div>
              <div class="column">
                <p>Fragen? Anregungen? Presse. Sponsoring.</p>
                <p class="mt-4"><strong>Stefan Matheis</strong><br><a href="mailto:stefan@mathe.is">✉️
                    stefan@mathe.is</a><br><a href="tel:004916097048114">📞 +49 160 970 48 114</a></p>
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