<template>
  <section class="section has-background-light">
    <div class="container is-max-desktop">
      <p class="title">Wir sagen Danke!</p>
      <p class="subtitle">
        Für die Unterstützung durch unsere Partner & Sponsoren
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container is-max-desktop">
      <div class="fixed-grid has-5-cols">
        <div class="grid">
          <div class="cell">
            <img src="/images/partner/markt-nesselwang.svg" class="invert" />
          </div>
          <div class="cell">
            <img src="/images/partner/alpspitzbahn-nesselwang.jpg" />
          </div>
          <div class="cell">
            <img src="/images/partner/sportheim-boeck.png" />
          </div>
          <div class="cell">
            <img src="/images/partner/bergwacht-nesselwang.png" />
          </div>
          <div class="cell">
            <img src="/images/partner/feuerwehr-nesselwang.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cell {
  text-align: center;
  align-self: center;
}

img {
  filter: grayscale(1);
  mix-blend-mode: multiply;
}

img.invert {
  filter: invert(1);
}
</style>
