<!-- Google Map -->
<?php include( 'header.php'); ?>

<section id="inside-header">
</section>

<section id="content-inside">
  <div class="in-frame">
    <div class="content-header">
      <ul>
        <li>
          <div class="header-title-container">
            <h1>
              <!--Inicio BreadCrumbs-->

              <a href="#">Visitar / </a>
              <span class="light">Como llegar</span>

              <!--Fin BreadCrumbs-->

            </h1>
          </div>
        </li>
        <li class="right-corner">
        </li>
      </ul>
    </div><!-- .content-header -->

    <!--Inicio Contenido Dinámico-->

    <div class="inner-content template-full section-como-llegar">
      <article>
        <header>
          <h1>
            Centro Cultural Kirchner
          </h1>
          <h3>
            Bouchard 350,
            <br> 1106 Buenos Aires
          </h3>
          <div class="descargar-mapa">
            <a class="button" href="#">DESCARGAR MAPA PDF</a>
          </div>
        </header>
        <div class="mapa">
          <div id="map_canvas" style="height:785px; width: auto;"></div>
        </div>
        <div class='como-llegar-info'>
          <div class="como-llegar-columna-1">
            <h1>
              <img src="assets/img/visitar/1/bus.png" />
            </h1>
            <h2>Colectivos</h2>
            <p>4, 6, 7, 20, 22, 23, 26, 28, 29, 33, 50, 56, 61, 62, 64, 74, 91, 93, 99, 105, 109, 111, 126, 129, 130, 140, 143, 146, 152, 159, 180, 195</p>
          </div>
          <div class="como-llegar-columna-2">
            <h1>
              <img src="assets/img/visitar/1/subte.png" />
            </h1>
            <h2>Subtes</h2>
            <p>
              <strong>Linea B </strong>. Estación Leandro N. Alem
              <br>200 mts.</p>
            <p>
              <strong>Linea D</strong> . Estación Cátedral
              <br>8 cuadras.</p>
            <p>
              <strong>Linea A</strong> . Estación Plaza de Mayo
              <br>10 cuadras.</p>
            <p>
              <strong>Linea C</strong> . Estación Esmeralda
              <br>7 cuadras.</p>

          </div>
          <div class="como-llegar-columna-3">
            <h1>
              <img src="assets/img/visitar/1/ferro.png" />
            </h1>
            <h2>Ferrocarril</h2>
            <p>
              <strong>FFCC San Martín.</strong> Ramal X Estación Retiro
              <br>Distancia 7 cuadras.</p>
            <p>
              <strong>FFCC Mitre </strong>. Ramal Mitre Estación X
              <br>Distancia 6 cuadras.</p>
          </div>
        </div>
        <p class="clearfix"></p>
      </article>
    </div>

    <!--Fin Contenido Dinámico-->


  </div><!-- .in-frame-->
</section><!-- .content-inside -->

<?php include( 'footer.php'); ?>
