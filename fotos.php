<?php include( 'header.php'); ?>

<section id="inside-header">
</section>
<section id="content-inside" class="agenda">
  <div class="in-frame">
    <div class="content-header">
      <main>
        <div class="header-title-container">
          <h1>
            <a href="#">Ver/Escuchar /</a>
            <span class="light">Fotos</span>
          </h1>
        </div>
      </main>
      <aside class="right-corner">

      </aside>
    </div>
    <div class="inner-content template-full section-fotos">
      <div class="fotos-container">
        <?php for ($i=0;$i<10;$i++):?>

        <article>
          <a href="#">
            <img src="//lorempixel.com/640/480" />

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
  </div>
</section>
<?php include( 'footer.php'); ?>
