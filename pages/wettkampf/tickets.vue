<script setup>
useSeoMeta({
  title: "Tickets",
  description: "Was der Spaß kostet",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Tickets</h1>

      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Zeitraum</th>
            <th class="ar">Einzel</th>
            <th class="ar">Staffel</th>
          </tr>
        </thead>
        <tbody>
          <tr class="is-selected">
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
            <td class="dt">11.09.2026 – 03.10.2026</td>
            <td class="ar">60 €</td>
            <td class="ar">110 €</td>
          </tr>
        </tbody>
      </table>

      <p>
        Ab 04.10.2026 (eine Woche vor der Veranstaltung) ist keine Anmeldung
        mehr möglich.
      </p>
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
