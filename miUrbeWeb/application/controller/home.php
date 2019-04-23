<?php


class Home extends Controller
{
  private $mdlLogin;


    public function __construct()
    {
      $this->mdlLogin = $this->LoadModel('mdlLogin');
    }

  public function index()
  {

    require APP . 'view/_templates/header.php';
    require APP . 'view/home/index.php';
    require APP . 'view/_templates/footer.php';
  }

  public function inicioSesion()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/home/inicioSesion.php';
    require APP . 'view/_templates/footer.php';
  }

  public function registro()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/home/registro.php';
    require APP . 'view/_templates/footer.php';
  }

  public function loginAdministracion()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/home/administracion.php';
    require APP . 'view/_templates/footer.php';
  }

  public function administracion()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/home/dashboard.php';
    require APP . 'view/_templates/footer.php';
  }
}
