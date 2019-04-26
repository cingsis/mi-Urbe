<?php


class Administracion extends Controller
{
  private $mdlLogin;

  public function __construct()
  {
    $this->mdlLogin = $this->LoadModel('mdlLogin');
  }

  public function dashboard()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/administracion/dashboard.php';
    require APP . 'view/_templates/footer.php';
  }

  public function edicion()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/administracion/edicion.php';
    require APP . 'view/_templates/footer.php';
  }

  public function nuevaUrbanizacion()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/administracion/nuevaUrbanizacion.php';
    require APP . 'view/_templates/footer.php';
  }
}
