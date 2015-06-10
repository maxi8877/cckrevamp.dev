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
              <a href="#">El Centro /</a>
              <span class="light">Noticias</span>
              <!-- Fin BreadCrumbs-->

            </h1>
          </div>
        </li>
        <li class="right-corner">
        </li>
      </ul>
    </div>

    <!--Inicio Contenido Dinámico-->
    <div class="inner-content template-full section-noticias">

      <!--Inicio Contenedor Masonry -->
      <div id="masonry-container">
        <div class="grid-sizer"></div>
        <div class="grid-gutter"></div>

        <?php //for loop para generar items simulados ?>
        <?php for ($i=0;$i<10;$i++):?>

          <article class="item article-noticias masonry-half">
            <a href="noticias-in.php">
              <header>
                <h4>
                1 de Julio</h4>
                <h1>
                  Espacios del Correo Oficial de la República Argentina
                </h1>
              </header>
              <p>La Presidenta de la Nación, Cristina Fernández de Kirchner, encabezó el acto de puesta en funcionamiento del "Centro Cultural Kirchner".</p>

              <figure>
                <img src="https://placeholdit.imgix.net/~text?txtsize=100&txt=16:9&w=1600&h=900" alt=""/>
                <figcaption>
                  <div class="share-icons-inside">
                  <a href="#"><i class="fa fa-calendar-o"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </div>
                </figcaption>
              </figure>
              <footer>
              </footer>
            </a>
          </article>

          <?php endfor; ?>

      </div>
      <!--Fin Contenedor Masonry -->

    </div>
    <!--Fin Contenido Dinámico-->

  </div>
  <!--.in-frame-->
</section>
<!--.content-inside-->

<?php include( 'footer.php'); ?>
