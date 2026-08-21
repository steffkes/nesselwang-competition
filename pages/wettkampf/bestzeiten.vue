<script setup>
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
            <a>
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
              <time>00:41:04</time>
              <span class="names has-text-grey-light">🇩🇪 Tim Martin</span>
            </td>
            <td>
              <time>00:44:02</time>
              <span class="names has-text-grey-light">🇩🇪 Stefan & Robin</span>
            </td>
          </tr>
          <tr>
            <th>Frauen</th>
            <td>
              <time>00:55:30</time>
              <span class="names has-text-grey-light">🇸🇮 Anja</span>
            </td>
            <td>
              <time>00:56:28</time>
              <span class="names has-text-grey-light">🇩🇪 Kim & Barbara</span>
            </td>
          </tr>
          <tr>
            <th>Mixed</th>
            <td>-</td>
            <td>
              <time>00:55:27</time>
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
