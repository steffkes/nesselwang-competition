<template>
  <div>
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <strong>Nesselwang Competition</strong>
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <!--
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sag mir auf jeden Fall Bescheid!</strong>
                </a>
              </div>
            </div>
          </div>
          -->
        </div>
      </nav>
    </div>

    <section class="section">
      <div class="container">
        <!--
        <div class="notification is-primary">
          This container is <strong>centered</strong> on desktop and larger viewports.
        </div>
        -->

        <div style="position:relative; width:100%; height:0px; padding-bottom:56.250%">
          <iframe allow="fullscreen;autoplay" allowfullscreen height="100%"
            src="https://streamable.com/e/sksaz8?autoplay=1&loop=0" width="100%"
            style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;">
          </iframe>
        </div>

      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="columns">

          <div class="column">
            <div class="columns">
              <div class="column is-4"><img src="/images/stefan.jpg" alt="Bild Stefan Matheis"></div>
              <div class="column">
                <p>Fragen? Anregungen? Presse. Sponsoring.</p>
                <p class="mt-4"><strong>Stefan Matheis</strong><br><a href="mailto:stefan@mathe.is">✉️
                    stefan@mathe.is</a><br><a href="tel:004916097048114">📞 +49 160 970 48 114</a></p>
              </div>
            </div>
          </div>
          <div class="column competitions">
            <div class="columns">
              <div class="column">
                <img src="/images/competition-nesselwang.svg" alt="Logo Competition Nesselwang">
                <p class="has-text-centered">
                  <span>Nesselwang</span>
                  <span>Competition</span>
                  <span class="has-text-grey-light">(Organisator)</span>
                </p>
              </div>
              <div class="column">
                <a href="https://www.schachmatt-ulm.de">
                <img src="/images/schachmatt-ulm.svg" alt="Logo Schachmatt Ulm">
                <p class="has-text-centered">
                  <span>Schachmatt</span>
                  <span>Ulm</span>
                  <span class="has-text-grey-light">(Organisator)</span>
                </p>
                </a>
              </div>
              <div class="column">
                <img src="/images/schanzenlauf-oberstdorf.svg" alt="Logo Schanzenlauf Oberstdorf">
                <p class="has-text-centered">
                  <span>Schanzenlauf</span>
                  <span>Oberstdorf</span>
                  <span class="has-text-grey-light">(Initiator)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<style>
@import url("bulma");
</style>

<style scoped>
.competitions span {
  display: block;
}
</style>