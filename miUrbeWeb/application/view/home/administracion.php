<?php require APP . 'view/_templates/menu.php'; ?>

<div class="container p-4">
  <div class="row">
    <div class="col-xs-12 col-sm12 col-md-12">
      <h1 class="titleadmin">Administración</h1>
    </div>
  </div>
  <form class="form-horizontal" action="#" method="post">
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 top">
        <div class="form-group">
          <label for="correoadmin" class="color">mi Correo Electrónico</label>
        </div>
        <div class="form-group">
          <input type="email" name="correoadmin" id="correoadmin" class="form-control" autofocus required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4">
        <div class="form-group">
          <label for="passadmin" class="color">mi Contraseña</label>
        </div>
        <div class="form-group">
          <input type="password" name="passwordadmin" id="passadmin" class="form-control" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm12 col-md-4">
        <p>&nbsp;</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 center">
        <button type="submit" name="btn-admin" id="ingresaramin">Ingresar</button>
      </div>
    </div>
  </form>
</div>
