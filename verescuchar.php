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

              <a href="#">Ver / Escuchar</a>

              <!-- Fin BreadCrumbs-->

            </h1>
          </div>
        </li>
        <li class="right-corner ">
          <input id="searchinchannel" placeholder="buscar en el canal">
          <i class="fa fa-search"></i>
          </input>
        </li>
      </ul>
    </div>

    <!--Inicio Contenido Dinámico-->
    <!-- Categorias
    .inner-content .root -> sin color
    .inner-content .artesvisuales
    .inner-content .escenicas
    .inner-content .musica
    .inner-content .educacion
    .inner-content .muestraspermanentes
    .inner-content .tuvoz
    -->

    <div class="inner-content  section-ver-escuchar root ">
      <div class="category-listings">
        <ul>
          <li class="tag-todas">
            <a href="verescuchar.php">TODAS</a>
          </li>
          <li class="tag-artesvisuales">
            <a href="4-c-artesvisuales.php">ARTES VISUALES</a>
          </li>
          <li class="tag-escenicas">
            <a href="4-c-escenicas.php">ARTES ESCÉNICAS</a>
          </li>
          <li class="tag-musica">
            <a href="4-c-musica.php">MÚSICA</a>
          </li>
          <li class="tag-educacion">
            <a href="4-c-educacion.php">EDUCACIÓN</a>
          </li>
          <li class="tag-muestraspermanentes">
            <a href="4-c-muestraspermanentes.php">PERMANENTES</a>
          </li>
          <li class="tag-tuvoz">
            <a href="4-c-tuvoz.php">TU VOZ</a>
          </li>
        </ul>
      </div>
      <div class="header-container">
        <h6 class="recent-posts-title">DESTACADOS</h6>
      </div>
      <article>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <header>
                <h1>
                  <strong>Sophie Calle</strong>, Sueña que duerme en el fondo del mar
                </h1>
              </header>
              <div class="flex-video">
                <div class="overlay">
                  <div class="bigfat">
                    <h1>Sophie Calle
                      <br>
                      <span class="bajada">Sueña que duerme en el fondo del mar</span>
                      <h1>
                        <span class="tag1 tag-artesvisuales">artes visuales</span>
                  </div>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xLC_pVhLYek" frameborder="0" allowfullscreen></iframe>
              </div>

              <ul class="online-tags">
                <li>
                  <a href="">artistas</a>
                </li>
                <li>
                  <a href="">biográficos</a>
                </li>
                <li>
                  <a href="">obra y creación</a>
                </li>
                <li>
                  <a href="">montajes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <div class="page-navigation">
            <div class="page-nav-prev">
              <i class='fa fa-arrow-left'></i>
            </div>
            <div class="page-nav-next">
              <i class='fa fa-arrow-right'></i>
            </div>
          </div>
        </footer>
      </article>
      <h6 class="recent-posts-title">RECIENTES</h6>

      <div class="recent-posts-grid recent-posts-grid-bottom">
        <ul>
          <li>
            <header>
              <span>Sueña que duerme en e fondo del mar</span>
              <h4 class="tag-musica">música</h4>
            </header>
            <img src="https://placeholdit.imgix.net/~text?txtsize=100&txt=4:3&w=800&h=600" />
            <i class="fa fa-youtube-play"></i>
            <a href="verescuchar-in.php"></a>
          </li>
          <li>
            <header>
              <span>Todo lo que esta mi lado</span>
              <h4 class="tag-escenicas">artes escénicas</h4>
            </header>
            <img src="https://placeholdit.imgix.net/~text?txtsize=100&txt=4:3&w=800&h=600" />
            <i class="fa fa-youtube-play"></i>
            <a href="verescuchar-in.php"></a>
          </li>
          <li>
            <header>
              <span>Así se baila el Tango</span>
              <h4 class="tag-escenicas">artes escenicas</h4>
            </header>

            <img src="https://placeholdit.imgix.net/~text?txtsize=100&txt=4:3&w=800&h=600" />
            <i class="fa fa-youtube-play"></i>
            <a href="verescuchar-in.php"></a>
          </li>
        </ul>
      </div>
    </div>

    <!--Fin Contenido Dinámico-->

  </div>
  <!--.in-frame-->
</section>
<!--.content-inside-->


<section id="infinite-loader">
  <div class="in-frame">
    <div class="infiniteScrollButton">Cargar Más</div>
  </div>
</section>



<?php include( 'footer.php'); ?>
