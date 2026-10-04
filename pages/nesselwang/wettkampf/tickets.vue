<script setup>
definePageMeta({
  layout: "nesselwang",
});

useSeoMeta({
  title: "Tickets",
  description: "Was der Spaß kostet",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Tickets</h1>

      <div class="notification is-info">
        <p>Ab 05.10.2026 ist keine Anmeldung mehr möglich.</p>
      </div>

      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Zeitraum</th>
            <th class="ar">Einzel</th>
            <th class="ar">Staffel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="dt">29.03.2026 – 26.07.2026</td>
            <td class="ar">40 €</td>
            <td class="ar">90 €</td>
          </tr>
          <tr>
            <td class="dt">27.07.2026 – 10.09.2026</td>
            <td class="ar">50 €</td>
            <td class="ar">100 €</td>
          </tr>
          <tr>
            <td class="dt">11.09.2026 – 04.10.2026</td>
            <td class="ar">60 €</td>
            <td class="ar">110 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.dt {
  font-variant-numeric: tabular-nums;
}
.ar {
  text-align: right !important;
}
</style>
