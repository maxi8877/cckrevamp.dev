<!--
Las galerias en el modal estan cargadas con ajax,
en app.js se encuentra definida una variable data con informacion de Muestra.
 -->


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
              <!-- Inicio BreadCrumbs-->

              <a href="#">Ver/Escuchar /</a>
              <span class="light">Fotos</span>

              <!-- Fin BreadCrumbs-->

            </h1>
          </div>
        </li>
        <li class="right-corner">
        </li>
      </ul>
    </div>

    <!--Inicio Contenido Dinámico-->

    <div class="inner-content template-full section-fotos">
      <div class="fotos-container-2">

        <!--for loop para generar 12 items -->
        <?php for ($i=0;$i<12;$i++):?>

        <article>
          <a href="#fotos-popup" data-effect="mfp-zoom-out">
            <div>
              <span>
                <h4>
                  El 1 de Julio</h4>
                <h1>
                  Cuenta cuentos con Analía Melgar
                </h1>
                <span>
            </div>
            <img src="//lorempixel.com/640/480/abstract" alt="lorempixel" />

          </a>
        </article>

        <?php endfor;?>

      </div>

      <!-- paginador idem minplan -->
      <div class="as_paginador clearfix">
        <ul>
          <li class=""><a href="#">Primero</a></li>
          <li class=""><a href="#">Anterior</a></li>
          <li class="active">1</li>
          <li class=""><a href="#">2</a></li>
          <li class="disabled">Siguiente</li>
          <li class="disabled">Último</li>
        </ul>
      </div>
    </div>

    <!--Fin Contenido Dinámico-->

  </div>
  <!--.in-frame-->
</section>
<!--.content-inside-->

<?php include( 'footer.php'); ?>
