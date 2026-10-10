<script setup>
definePageMeta({
  layout: "nesselwang",
});

useSeoMeta({
  title: "Bestzeiten 2026",
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
          <li>
            <a href="/nesselwang/wettkampf/bestzeiten">
              <span>Gesamt</span>
            </a>
          </li>
          <li class="is-active">
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
              <time>00:38:30</time>
              <span class="names has-text-grey-light">🇩🇪 Tim Martin</span>
            </td>
            <td>
              <time>00:49:04</time>
              <span class="names has-text-grey-light">🇩🇪 Julian & Mario</span>
            </td>
          </tr>
          <tr>
            <th>Frauen</th>
            <td>
              <time>00:57:50</time>
              <span class="names has-text-grey-light">🇩🇪 Kim</span>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <th>Mixed</th>
            <td>-</td>
            <td>
              <time>01:02:04</time>
              <span class="names has-text-grey-light"
                >🇩🇪 Barbara & Lennart</span
              >
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
