<script setup>
definePageMeta({
  layout: "nesselwang",
});

useSeoMeta({
  title: "Wettkampf-Zeitplan",
  description: "Was, wann & wo stattfindet",
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <h1 class="title">Der Ablauf</h1>

      <div class="content">
        <h3>Freitag</h3>

        <ul>
          <li>
            <span class="tag is-light">17:00-19:00</span> Ausgabe der
            Startunterlagen (im Gerätehaus der Feuerwehr Nesselwang)
          </li>
          <li>
            <span class="tag is-light">ab 18:00</span> Pasta-Party @ Feuerwehr
            Nesselwang (Gerätehaus offen ab 17:00 Uhr)
          </li>
        </ul>

        <h3>Samstag</h3>

        <div class="notification is-info">
          <p>
            Bitte beachtet die
            <a href="/nesselwang/teilnehmende/anfahrt"
              >Hinweise zum Parken am Samstag</a
            >!
          </p>
        </div>

        <ul>
          <li>
            <span class="tag is-light">07:30-09:00</span> Ausgabe der
            Startunterlagen (im Startbereich am Explorer Hotel)
          </li>
          <li>
            <span class="tag is-light">09:15</span> Abmarsch der 2.
            Staffel-Läufer zum Lift an die Mittelstation in die Wechselzone
          </li>
          <li>
            <span class="tag is-light">10:00</span> Startschuss für den ersten
            Läufer (jeweils Einzel als auch Staffel)
          </li>
          <li><span class="tag is-light">~13:00</span> Siegerehrung</li>
          <li>
            <span class="tag is-light">ab 18:00</span> Grill-Abend @ Feuerwehr
            Nesselwang (Gerätehaus offen ab 17:00 Uhr)
          </li>
        </ul>

        <div class="notification mt-6">
          <p>
            Startschuss (für Einzel und Staffel) <strong>um 10:00 Uhr</strong>,
            danach Einzelstart alle 30 Sekunden (nach aufsteigender Startnummer)
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
