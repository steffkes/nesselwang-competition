<script setup>
const { registration } = await useEvent();
</script>

<template>
  <div>
    <section class="section">
      <div class="container is-max-desktop">

        <div class="content">
          <p class="has-text-centered">Der <strong>Fire Trail Nesselwang</strong> findet statt am <strong>Samstag, 18.10.25</strong> an der <strong>Alpspitzbahn Nesselwang</strong>.</p>
          <p class="has-text-centered"><a href="//go.fire-trail-nesselwang.de/anmeldung" class="button is-success is-medium">Ich will einen der <span class="tag is-white mx-1">{{ registration.slots }}</span> Startplätze!</a></p>
        </div>
      
      </div>
    </section>

    <section class="section has-background-info">
      <div class="container is-max-desktop">
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
      <div class="container is-max-desktop">

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

    <section class="hero is-info">
      <div class="container is-max-desktop">
        <div class="hero-body px-0">
          <p class="title">Für den ersten Eindruck</p>
          <p class="subtitle">Impressionen vom Wasserfallweg, der Bayernkurve & vom Ziel</p>
        </div>
      </div>
    </section>

     <section class="section">
       <div class="container is-max-desktop">
 
        <div class="columns is-2">
          <div class="column">
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
              </div>
            </div>
          </div>
                      <div class="column">
        <div class="fixed-grid has-2-cols">
            <div class="grid">
                <div class="cell is-row-span-2">
                <figure class="image is-3by4">
                    <img src="/images/bild-07.jpg" />
                </figure>
                </div>
                <div class="cell">
                <figure class="image is-4by3">
                   <img src="/images/bild-06.jpg" />
                </figure>
                </div>
                <div class="cell">
                <figure class="image">
                    <img src="/images/bild-05.jpg" />
                </figure>
                </div>
            </div>
          </div>
        </div>
      </div>
 
      </div>
    </section>

  </div>
</template>

<style scoped>
</style>
