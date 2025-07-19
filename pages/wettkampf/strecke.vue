<script setup>
useSeoMeta({
  title: "Wettkampf-Strecke",
  description: "Damit auch alle das Ziel finden",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Die Strecke im Überblick</h1>

      <div
        class="mb-4"
        style="
          position: relative;
          width: 100%;
          height: 0px;
          padding-bottom: 56.25%;
        "
      >
        <iframe
          allow="fullscreen"
          allowfullscreen
          height="100%"
          src="https://streamable.com/e/sksaz8?autoplay=0&loop=0"
          width="100%"
          style="
            border: none;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
            overflow: hidden;
          "
        >
        </iframe>
      </div>

      <div class="content">
        <p>
          Los geht's am Explorer Hotel Nesselwang, den Wasserfallweg entlang ein
          paar Treppen hinaus - bis man an der Mittelstation der Alpspitzbahn
          aus dem Wald bricht. Dann geht's weiter auf der Teerstraße, durch die
          bekannte Bayernkurve und einen letzten Anstieg hinauf zur Bergstation.
          Von dort aus ist es nur nur ein Katzensprung ans Sportheim Böck - das
          Ziel des Fire Trail Nesselwang.
        </p>

        <p>
          Du kannst dir auch
          <NuxtLink href="/wettkampf/impressionen"
            >weitere Impressionen der Strecke</NuxtLink
          >
          anschauen.
        </p>

        <p class="title is-4 mt-6">Das Höhenprofil</p>
        <p class="subtitle is-6">Dein Weg auf 1'5000 Meter</p>

        <p><img src="/images/elevation-profile.svg" /></p>

        <p>
          Du kannst dir auch
          <a href="/fire-trail-nesselwang.gpx"
            >das komplette Höhenprofil herunterladen</a
          >, um es dir in aller Ruhe anzuschauen.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
