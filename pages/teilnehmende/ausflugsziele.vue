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
    url="/images/ausflugsziele/alpspitzkick.jpg"
    :position="{ x: 65 }"
  >
    <!-- Alpspitzbahn Nesselwang GmbH & Co. KG  -->
    <p class="title is-4">
      <a href="https://www.alpspitzkick.de">AlpspitzKICK</a>
    </p>
    <p class="subtitle is-6">Nesselwang (direkt am Berg)</p>

    <p>
      Adrenalin pur verspricht der AlpspitzKICK – die längste Zipline
      Deutschlands mit über 1,2 Kilometern Länge. Gesichert am Drahtseil fliegt
      man mit bis zu 120 km/h über Wälder, Wiesen und Felshänge hinweg ins Tal –
      ein unvergessliches Flugerlebnis mit Gänsehautgarantie und einem
      unbeschreiblichen Gefühl von Freiheit in der Luft.
    </p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/alpspitzcoaster.jpg"
    :position="{ x: 60 }"
  >
    <!-- https://www.youtube.com/watch?v=7FtgL8j-6L0 -->
    <p class="title is-4">
      <a href="https://www.nesselwang.de/alpspitzcoaster-im-allgaeu.html"
        >AlpspitzCOASTER</a
      >
    </p>
    <p class="subtitle is-6">Nesselwang (direkt am Berg)</p>

    <p>
      Benutzung ab 3 Jahren möglich! Für alle, die Geschwindigkeit lieben, ist
      der AlpspitzCOASTER ein absoluter Hit: Die moderne Schienenrodelbahn
      schlängelt sich ganzjährig über Wellen, Steilkurven und durch Tunnel ins
      Tal – über 1.000 Meter pures Fahrvergnügen! Dabei kann jeder selbst Tempo
      und Kurvenlage bestimmen – Spaß für Groß und Klein mitten im Allgäu.
    </p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/alpspitzsplash.jpg"
    :position="{ x: 40 }"
  >
    <p class="title is-4">
      <a href="https://www.nesselwang.de/alpspitzsplash.html">AlpspitzSPLASH</a>
    </p>
    <p class="subtitle is-6">Nesselwang (direkt am Berg)</p>

    <p>
      Benutzung ab 6 Jahren möglich! Der AlpspitzSPLASH bringt Kletterspaß ins
      Wasser: auf einem floating Parcours mit Plattformen, Seilen, Netzen und
      Rutschen in etwa 1,80 m Höhe über dem See testen Besucher ihre Balance,
      Kraft und Ausdauer – und ein unfreiwilliger Sprung ins kühle Nass gehört
      dazu!
    </p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/alpspitz-bade-center.jpg"
    :position="{ x: 45 }"
  >
    <!-- https://www.youtube.com/watch?v=1o6mltqNYJQ -->
    <p class="title is-4">
      <a href="https://www.nesselwang.de/alpspitz-bade-center-im-allgaeu.html"
        >Alpspitz-Bade-Center</a
      >
    </p>
    <p class="subtitle is-6">Nesselwang · 🚗 5 Minuten oder 🚶 10 Minuten</p>

    <p>
      Egal ob nach einer Wanderung oder an einem Regentag – das
      Alpspitz-Bade-Center bietet Badespaß und Entspannung für alle
      Altersgruppen. Mit Wildwasserkanal, 25-Meter-Sportbecken,
      Kinderspielbereich, großer Sauna- und Wellnesslandschaft sowie einem
      Strömungskanal und der spektakulären Reifenrutsche „Crazy Bob“ ist für
      Action und Erholung gleichermaßen gesorgt.
    </p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/walderlebniszentrum.jpg"
    :position="{ x: 30 }"
  >
    <p class="title is-4">
      <a href="https://www.walderlebniszentrum.eu">Walderlebniszentrum</a>
    </p>
    <p class="subtitle is-6">Füssen/Ziegelwies · 🚗 25 Minuten</p>

    <p>
      Naturabenteuer für die ganze Familie! Entdeckt den Auwald mit einer
      spannenden Floßfahrt, tobt euch auf dem fantasievollen Abenteuerspielplatz
      mit Riesenschaukeln und Kletterspinnennetz aus und erlebt auf dem 21 Meter
      hohen Baumkronenpfad spektakuläre Ausblicke über die Alpen bis nach
      Österreich!
    </p>
  </ImageSection>

  <ImageSection
    url="/images/ausflugsziele/schloss-neuschwanstein.jpg"
    :position="{ x: 20 }"
  >
    <!-- Jacek Dylag @ https://unsplash.com/photos/white-and-black-castle-DcQ8dSqEosA -->
    <p class="title is-4">
      <a href="https://www.neuschwanstein.de">Schloß Neuschwanstein</a>
    </p>
    <p class="subtitle is-6">Füssen/Schwangau · 🚗 30 Minuten</p>

    <p>
      Nur eine halbe Autostunde von Nesselwang entfernt liegt das märchenhafte
      Schloss Neuschwanstein – eines der berühmtesten Bauwerke Europas. König
      Ludwig II. ließ hier seine Fantasien in Stein meißeln: Prunkvolle Säle,
      romantische Türme und eine märchenhafte Kulisse machen den Besuch zu einem
      Erlebnis wie aus einer anderen Welt – ein unvergesslicher Höhepunkt jeder
      Allgäu-Reise.
    </p>
  </ImageSection>
</template>

<style scoped></style>
