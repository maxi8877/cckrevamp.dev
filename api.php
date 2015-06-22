<?php
require_once 'Slim/Slim.php';
$app = new Slim();
$app->get('/hello', 'hello');

$app->run();




function hello() {
  $result='[{"entrada":"Titulo","fecha":"El 1 de Julio","bajada":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes","imagen_img":"http://lorempixel.com/800/600/abstract/2","categoria":"artes visuales"},{"entrada":"Titulo","fecha":"El 1 de Julio","bajada":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes","imagen_img":"http://lorempixel.com/800/600/abstract","categoria":"artes visuales"}]';
   echo $result;
}


?>
