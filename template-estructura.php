<?php include( 'header.php'); ?>


<section id="inside-header">
  <!-- Contenedor Imagen Header Interno-->

</section>
<!--Inicio Contenedor Principal -->

<section id="content-inside"> <!-- se eliminaron todas las clases inyectadas en este contenedor a excepción de .online (genera ancho de 960px para ver y escuchar, inyectada mediante js)-->
  <!--Inicio contenedor ancho estático -->
  <div class="in-frame">
    <!--Inicio Bloque superior de contenido -->
    <div class="content-header">
      <ul>
        <li>
          <div class="header-title-container">
            <h1>
              <!-- BreadCrumbs-->

            </h1>
          </div>
        </li>
        <li class="right-corner">
          <!-- area reservada para widgets-->
          <!-- por ej busqueda en ver/escuchar -->
        </li>
      </ul>
    </div>

    <!--Inicio Contenido Dinámico-->

    <!--Inicio Columna Principal
    Clases:
    .inner-content .template-sidebar -> relacion: 17 columnas de 24  / Alineacion Derecha
    .inner-content .template-sidebar-right  ->  relacion: 17 columnas de 24 / Alineacion Izquierda
    .inner-content .template-full -> ancho maximo

    -->
    <div class="inner-content template-sidebar-right"> <!-- todas las clases se inyectan en este contenedor (por ej: .section-agenda)-->

    </div>

    <!--Inicio Barra Lateral
    Clases:
    #secondary -> alineacion Izquierda
    #secondary.right -> alineacion Derecha
    Relacion: 7 columnas de 24.

    -->

    <div id="secondary" class="right">

    </div>

    <!--Fin Barra Lateral-->

    <!--Fin Contenido Dinámico-->

  </div>
  <!--.in-frame-->
</section>
<!--.content-inside-->

<?php include( 'footer.php'); ?>




<!--Extras -->
<!-- Estructura Simplificada opcional para .content-header (Sin Listas)
Se pueden usar cualquiera de las dos ya que estan contempladas en esl css
-->

<div class="content-header">
    <main>
        <div class="header-title-container">
          <h1>
            <!-- BreadCrumbs-->
          </h1>
        </div>
      </main>
      <aside class="right-corner">
        <!-- area reservada para widgets-->
      </aside>
</div>
