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
      <div class="fotos-container">
        <?php for ($i=0;$i<10;$i++):?>

        <article>
          <a href="#" data-effect="mfp-zoom-out">
            <img src="//lorempixel.com/640/480/abstract" />
            <div>
              <span>
              <h4>
              El 1 de Julio</h4>
              <h1>
                Cuenta cuentos con Analía Melgar
              </h1>
              <span>
            </div>
          </a>
        </article>

      <?php endfor;?>

      </div>
    </div>
    <!--Inicio Contenido Dinámico-->

  </div>
  <!--.in-frame-->
</section>
<!--.content-inside-->

<?php include( 'footer.php'); ?>
