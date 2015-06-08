<?php include( 'header.php'); ?>


<section id="inside-header">
</section>
<section id="content-inside" class="static">
  <div class="in-frame">
    <div class="content-header">
      <ul>
        <li>
          <div class="header-title-container">
            <h1>
              <!-- Inicio BreadCrumbs-->

              <a href="#">Visitar / </a>
              <span class="light"><a href="planos-piso-0.php">Plano</a> / Planta Baja</span>

              <!-- Fin BreadCrumbs-->

            </h1>

          </div>
        </li>
        <li class="right-corner">
        </li>
      </ul>
    </div>

    <!--Inicio Contenido Dinámico-->

    <!--Inicio Barra Lateral-->

    <div id="secondary" class="right">
      <div class="sidebar-widget-planos plano-sidebar">
        <h3 class="acc-trigger button">Pisos</h3>
        <div class="acc-content">
          <ul>
            <li class="inactive"><a href="#">SUBSUELO</a></li>
            <li class="active"><a href="planos-piso-0.php">PLANTA BAJA</a></li>
            <li class="inactive"><a href="#">PISO 1</a></li>
            <li><a href="planos-piso-2.php">PISO 2</a></li>
            <li class="inactive"><a href="#">PISO 3</a></li>
            <li><a href="planos-piso-4.php">PISO 4</a></li>
            <li class="inactive"><a href="#">PISO 5</a></li>
            <li><a href="planos-piso-6.php">PISO 6</a></li>
            <li class="inactive"><a href="#">PISO 7</a></li>
            <li class="inactive"><a href="#">PISO 8</a></li>
            <li><a href="planos-piso-9.php">PISO 9</a></li>
            <li><a href="planos-vista-lateral.php">Corte longitudinal del CCK</a></li>
          </ul>
        </div>
      </div>

      <div class="sidebar-widget-plano-details plano-sidebar-details">
        <h3 class="acc-trigger button">Información del Plano</h3>
        <div class="acc-content">
          <ul class="plano-colores">
            <li>
              <span class="icon-box bg-cyan">&nbsp;</span>Salas</li>
            <li>
              <span class="icon-box bg-yellow">&nbsp;</span>Auditorios</li>
            <li>
              <span class="icon-box bg-muestraspermanentes">&nbsp;</span>Exposiciones Permanentes</li>
            <li>
              <span class="icon-box bg-artesvisuales">&nbsp;</span>Salas de Artes Visuales</li>
          </ul>
          <ul class="plano-iconos">
            <li>
              <span class="icon-plano">
                <img src="assets/img/planos/iconos/atencion-publico.png" />
              </span>Atenci&oacute;n al p&uacute;blico</li>
            <li>
              <span class="icon-plano">
                <img src="assets/img/planos/iconos/escaleras-mec.png" />
              </span>Escaleras Mec&aacute;nicas</li>
            <li>
              <span class="icon-plano">
                <img src="assets/img/planos/iconos/escaleras.png" />
              </span>Escaleras</li>
            <li>
              <span class="icon-plano">
                <img src="assets/img/planos/iconos/ascensor.png" />
              </span>Ascensor</li>
            <li>
              <span class="icon-plano">
                <img src="assets/img/planos/iconos/ascensor-acc.png" />
              </span>Ascensor Accesible</li>
            <li>
              <span class="icon-plano">
                <img src="assets/img/planos/iconos/toilette-m.png" />
              </span>Toilette Mujeres</li>
            <li>
              <span class="icon-plano">
                <img src="assets/img/planos/iconos/toilette-h.png" />
              </span>Toilette Hombres</li>
            <li>
              <span class="icon-plano">
                <img src="assets/img/planos/iconos/toilette-acc.png" />
              </span>Toilette Accesible</li>

          </ul>
        </div>
      </div>
      <div class="plano-dl-button">
        <a href="assets/files/Plano-CCK.pdf" class=" button">Descargar plano en PDF</a>
      </div>
    </div>


    <!--Fin Barra Lateral-->

    <div class="inner-content template-sidebar-right section-planos">
      <article>
        <header>
          <h1>PB</h1>
          <h2 class="cyan">INGRESO</h2>
          <h2>HALL</h2>
          <h2>PLAZA SECA</h2>


        </header>
        <div class="plano">
          <span class="zoom-panel">
            <i class="fa fa-search-plus"></i>
          </span>
          <img src="assets/img/planos/pb.jpg" />
        </div>
        <div class="plano-info">
          <h2>
            EXPOSICIONES
          </H2>
          <ul>
            <li>
              <h3 class="expo-title color-artesvisuales">Homenajes</h3>
              <span class="expo-description">Hall</span>
            </li>

          </ul>
        </div>
      </article>
    </div>

    <!--Fin Contenido Dinámico-->

  </div>
  <!--.in-frame-->
</section>
<!--.content-inside-->

<?php include( 'footer.php'); ?>
