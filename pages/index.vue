<template>
  <div style="position: relative">
    <div
      style="
        background-color: rgba(0, 0, 0, 1);
        position: absolute;
        left: 50%;
        margin-left: -50px;
        padding: 20px;
        width: 100px;
      "
    >
      <img
        src="/fire-trail-allgaeu-symbol.svg"
        alt="Symbol Fire Trail Allgäu"
      />
    </div>

    <div class="tabs is-fullwidth is-boxed">
      <ul>
        <li
          style="
            background-image: url(/immenstadt/images/hero.jpg);
            background-position: 30% 30%;
          "
        >
          <a><span>Immenstadt</span></a>
        </li>
        <li
          style="
            background-image: url(/nesselwang/images/hero.jpg);
            background-position: 40% 60%;
          "
        >
          <a href="/nesselwang"
            ><span>Nesselwang</span>
            <!--<span class="tag ml-2">10.10.26</span>-->
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.tabs li {
  background-size: cover;
}
.tabs ul {
  border-bottom: none;
}
.tabs a {
  background-color: rgba(255, 255, 255, 0.5) !important;
  padding-bottom: 75vh;
}
.tabs a:hover {
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>
