<script setup>
definePageMeta({
  layout: "nesselwang",
});

useSeoMeta({
  title: "Bestzeiten",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="content">
        <h2>Die Bestzeiten</h2>
      </div>

      <div class="tabs">
        <ul>
          <li class="is-active">
            <a href="/nesselwang/wettkampf/bestzeiten">
              <span>Gesamt</span>
            </a>
          </li>
          <li>
            <a href="/nesselwang/wettkampf/bestzeiten/2026">
              <span>2026</span>
            </a>
          </li>
          <li>
            <a href="/nesselwang/wettkampf/bestzeiten/2025">
              <span>2025</span>
            </a>
          </li>
        </ul>
      </div>

      <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Einzel</th>
            <th>Staffel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Männer</th>
            <td>
              <time>00:38:30 <span class="tag">2026</span></time>
              <span class="names has-text-grey-light">🇩🇪 Tim Martin</span>
            </td>
            <td>
              <time>00:44:02 <span class="tag">2025</span></time>
              <span class="names has-text-grey-light">🇩🇪 Stefan & Robin</span>
            </td>
          </tr>
          <tr>
            <th>Frauen</th>
            <td>
              <time>00:55:30 <span class="tag">2025</span></time>
              <span class="names has-text-grey-light">🇸🇮 Anja</span>
            </td>
            <td>
              <time>00:56:28 <span class="tag">2025</span></time>
              <span class="names has-text-grey-light">🇩🇪 Kim & Barbara</span>
            </td>
          </tr>
          <tr>
            <th>Mixed</th>
            <td>-</td>
            <td>
              <time>00:55:27 <span class="tag">2025</span></time>
              <span class="names has-text-grey-light">🇩🇪 Matthias & Sune</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
time {
  font-variant-numeric: tabular-nums;
}
.names {
  display: block;
  white-space: nowrap;
}
</style>
