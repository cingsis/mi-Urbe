<?php require APP . 'view/_templates/menu.php'; ?>

<div class="container p-4">
  <div class="row">
    <div class="col-xs-12 col-sm12 col-md-12">
      <h1 class="titleregistro">mi Registro</h1>
    </div>
  </div>
  <form class="form-horizontal" action="#" method="post" enctype="multipart/form-data">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 icon">
        <i class="fas fa-user fa-5x"></i>
        <label for="foto" class="upload-button">Cargar mi Imagen</label>
        <input id="foto" name="archivo" type="file" accept="image/*"/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 top">
        <div class="form-group">
          <label for="nombre" class="color">mi Nombre</label>
        </div>
        <div class="form-group">
          <input type="text" name="name" id="nombre" class="form-control" autofocus required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4">
        <div class="form-group">
          <label for="email" class="color">mi Correo</label>
        </div>
        <div class="form-group">
          <input type="email" name="correo" id="email" class="form-control" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4">
        <div class="form-group">
          <label for="celular" class="color">mi Número Celular</label>
        </div>
        <div class="form-group">
          <input type="text" name="cell" id="celular" class="form-control" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4">
        <div class="form-group">
          <label for="contrasenia" class="color">mi Contraseña</label>
        </div>
        <div class="form-group">
          <input type="text" name="pass" id="contrasenia" class="form-control" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4">
        <div class="form-group">
          <label for="contrasenia2" class="color">mi Contraseña Nuevamente</label>
        </div>
        <div class="form-group">
          <input type="text" name="pass2" id="contrasenia2" class="form-control" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 center">
        <button type="submit" name="registro" id="registro">Registro</button>
      </div>
    </div>
  </form>
</div>
