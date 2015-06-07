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
              <a href="#">El Centro /</a>
              <span class="light">Prensa</span>
            </h1>
            <p>
            </p>
          </div>
        </li>
        <li class="right-corner">
        </li>
      </ul>
    </div>
    <div class="inner-content template-full section-prensas">

      <div id="masonry-container">
        <div class="grid-sizer"></div>
        <div class="grid-gutter"></div>
        <?php for ($i=0;$i<10;$i++):?>
          <?php// $content = file_get_contents('http://loripsum.net/api/1/short/plaintext');?>
        <article class="item article-muestras masonry-third">
          <a href="prensa-in.php">
            <header>
              <h4>
                <strong>Noticias</strong> 1 de Julio</h4>
              <h1>
                Espacios del Correo Oficial de la República Argentina
              </h1>
            </header>
            <p>La Presidenta de la Nación, Cristina Fernández de Kirchner, encabezó el acto de puesta en funcionamiento del "Centro Cultural Kirchner".</p>

            <figure>
              <img src="https://placehold.it/640x480" />
              <figcaption>
                <!-- <div class="share-icons-inside">
                  <a href="#"><i class="fa fa-calendar-o"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </div> -->
              </figcaption>
            </figure>
            <footer>
            </footer>
          </a>
        </article>
      <?php endfor; ?>

      </div>
    </div>
  </div>
</section>
<?php include( 'footer.php'); ?>
