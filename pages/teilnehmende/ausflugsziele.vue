<script setup>
useSeoMeta({
  title: "Ausflugsziele",
  description: "Was es außenrum für dich/euch noch so gibt",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Was du/die Familie unternehmen kannst</h1>
      <p class="subtitle">
        Ein paar Ideen, was es in/um Nesselwang noch so alles gibt
      </p>
    </div>
  </section>

  <ImageSection
    url="/images/ausflugsziele/goldener-oktober.jpg"
    :position="{ x: 40 }"
  >
    <p class="title is-4">
      <a href="https://www.nesselwang.de/festtag-goldener-oktober.html"
        >Festtag Goldener Oktober</a
      >
    </p>
    <p class="subtitle is-6">Sonntag, 19.10.25 @ Nesselwang</p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/alpspitzkick.jpg"
    :position="{ x: 65 }"
  >
    <p class="title is-4">
      <a href="https://www.alpspitzkick.de">AlpspitzKICK</a>
    </p>
    <p class="subtitle is-6">Nesselwang</p>

    <p>
      Deutschlands längste Zipline! 1,2km talwärts, bis zu 120 km/h schnell -
      mit einer fantastischen Aussicht über die Voralpenlandschaft
    </p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/alpspitzcoaster.jpg"
    :position="{ x: 60 }"
  >
    <p class="title is-4">
      <a href="https://www.nesselwang.de/alpspitzcoaster-im-allgaeu.html"
        >AlpspitzKICK</a
      >
    </p>
    <p class="subtitle is-6">Nesselwang</p>

    <p>Benutzung ab 3 Jahren möglich.</p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/alpspitzsplash.jpg"
    :position="{ x: 40 }"
  >
    <p class="title is-4">
      <a href="https://www.nesselwang.de/alpspitzsplash.html">AlpspitzKICK</a>
    </p>
    <p class="subtitle is-6">Nesselwang</p>

    <p>Benutzung ab 6 Jahren möglich.</p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/schloss-neuschwanstein.jpg"
    :position="{ x: 60 }"
  >
    <p class="title is-4">
      <a href="https://www.neuschwanstein.de">Schloß Neuschwanstein</a>
    </p>
    <p class="subtitle is-6">Füssen/Schwangau</p>

    <p>
      Schloß Neuschwanstein ist UNESCO-Welterbe! Die Besichtigung von Schloss
      Neuschwanstein ist nur im Rahmen einer Führung möglich.
    </p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/alpspitz-bade-center.jpg"
    :position="{ x: 45 }"
  >
    <p class="title is-4">
      <a href="https://www.nesselwang.de/alpspitz-bade-center-im-allgaeu.html"
        >Alpspitz-Bade-Center</a
      >
    </p>
    <p class="subtitle is-6">Nesselwang</p>
  </ImageSection>
</template>

<style scoped></style>
