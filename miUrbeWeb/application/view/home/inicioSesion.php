<?php require APP . 'view/_templates/menu.php'; ?>

<div class="container p-4">
  <div class="row">
    <div class="col-xs-12 col-sm12 col-md-12">
      <h1 class="titleingresar">Ingresar</h1>
    </div>
  </div>
  <form class="form-horizontal" action="#" method="post">
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 top">
        <div class="form-group">
          <label for="correo" class="color">mi Correo Electrónico</label>
        </div>
        <div class="form-group">
          <input type="email" name="correo" id="correo" class="form-control" autofocus required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4">
        <div class="form-group">
          <label for="pass" class="color">mi Contraseña</label>
        </div>
        <div class="form-group">
          <input type="password" name="pass" id="pass" class="form-control" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4">
        <p class="right">
          <a href="#">Recordar mi contraseña</a>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 center">
        <button type="submit" name="registrar" id="registrar">Ingresar</button>
      </div>
    </div>
  </form>
  <div class="row">
    <div class="col-xs-12 col-sm12 col-md-4">
      <p>&nbsp;</p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4">
      <p class="center">
        <a href="#">Registrar. Quiero crear mi cuenta</a>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-2 col-sm-2 col-md-2">
      <p>&nbsp;</p>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2">
      <a href="#"><img src="<?= URL; ?>img/logo-facebook.jpg" alt=""></a>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2">
      <a href="#"><img src="<?= URL; ?>img/logo-google.jpg" alt=""></a>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2">
      <a href="#"><img src="<?= URL; ?>img/logo-instagram.jpg" alt=""></a>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2">
      <a href="#"><img src="<?= URL; ?>img/logo-twitter.jpg" alt=""></a>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2">
      <p>&nbsp;</p>
    </div>
  </div>
</div>
