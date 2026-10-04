<script setup>
definePageMeta({
  layout: "nesselwang",
});

useSeoMeta({
  title: "Anfahrt",
  description: "Wie ihr überhaupt hinkommt",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Wie du zu uns kommst</h1>
      <p class="subtitle">Wie, wo & was</p>

      <div class="content">
        <h3>Freitag</h3>

        <div class="columns">
          <div class="column is-6 is-offset-6">
            <p class="mb-1">
              <strong>Abends</strong>: Pasta-Party & Startnummern
            </p>
            <p>
              <a href="https://maps.app.goo.gl/7hoJtU971vW1Dr3v5">
                Gerätehaus Freiwillige Feuerwehr Nesselwang<br />
                An der Riese 27, 87484 Nesselwang
              </a>
            </p>
          </div>
        </div>

        <h3>Samstag</h3>

        <div class="columns">
          <div class="column">
            <p class="mb-1">
              <strong>Morgens</strong>: Parken für den Wettkampf
            </p>
            <p>
              <a href="https://maps.app.goo.gl/JRcaDuA2LbCFgN3e6">
                Parkplatz Firma Endress+Hauser<br />
                Obere Wank 1, 87484 Nesselwang
              </a>
            </p>

            <div class="notification is-warning">
              <p>
                <strong
                  >Der Parkplatz der Alpspitzbahn wird bitte nicht für den
                  Wettkampf benutzt.</strong
                >

                Ihr dürft am Samstag kostenlos mit der Bahn fahren. Haltet im
                Gegenzug bitte die Parkplätze direkt an der Bahn für die
                zahlenden Gäste frei.
              </p>
            </div>
          </div>
          <div class="column">
            <p class="mb-1"><strong>Abends</strong>: Grill-Party</p>
            <p>
              <a href="https://maps.app.goo.gl/7hoJtU971vW1Dr3v5">
                Gerätehaus Freiwillige Feuerwehr Nesselwang<br />
                An der Riese 27, 87484 Nesselwang
              </a>
            </p>
          </div>
        </div>
      </div>

      <figure class="image">
        <img src="/nesselwang/images/lageplan.svg" />
      </figure>
      <p>
        <a
          href="https://www.openstreetmap.org/directions?engine=graphhopper_foot&route=47.617065%2C10.510209%3B47.617576%2C10.501962#map=17/47.616868/10.504802"
          >Komplette Route bei OpenStreetMap anschauen</a
        >
      </p>
    </div>
  </section>
</template>

<style scoped></style>
