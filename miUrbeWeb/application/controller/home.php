<?php

class Home extends Controller
{
  private $mdlLogin;

  public function __construct()
  {
    $this->mdlLogin = $this->LoadModel('mdlLogin');
  }

  private function Encrypt($string)
  {
    $sizeof = strlen($string) - 1;
    $result = '';
    for ($x = $sizeof; $x >= 0; $x--)
    {
      $result .= $string[$x];
    }
    $result = sha1($result);
    return $result;
  }

  public function problem()
  {
    echo "Página no encontrada";
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

  public function validarInicioSesion()
  {
    if (isset($_POST['iniciar']) && isset($_POST['correo']) && isset($_POST['pass']))
    {
      $correo = $_POST['correo'];
      $pass = $_POST['pass'];

      if (strstr($correo, "@") && strstr($correo, ".") &&
          strlen($pass) >= 8)
      {
        $this->mdlLogin->__SET("Correo", $correo);
        $this->mdlLogin->__SET("Clave", $this->Encrypt($pass));
        $user = $this->mdlLogin->consultarDatosUsuario();

        if(count($user) != 0)
        {
          foreach ($user as $value)
          {
            if ($value['Correo'] == $correo &&
            $value['Clave'] == $this->Encrypt($pass))
            {
              $_SESSION['SESION_INICIADA'] = TRUE;
              $_SESSION['USUARIO_ID'] = $value['idUsuario'];
              $_SESSION['EMAIL'] = $value['Correo'];

              header("Location: " . URL . "administracion/dashboard");
              exit;
            }
          }
        }
        else
        {
          $_SESSION['type'] = "danger";
          $_SESSION['message'] = "Las credenciales ingresadas son incorrectas";
          header("Location: " . URL . "home/inicioSesion");
          exit;
        }
      }
      else
      {
        $_SESSION['errortype'] = "danger";
        $_SESSION['errorcampos'] = "Los valores ingresados no cumplen con los parámetros,
                                    por favor vuelva a intentar.";
        header("Location: " . URL . "home/inicioSesion");
        exit;
      }
    }
    else
    {
      header("Location: " . URL . "home/inicioSesion");
      exit;
    }
  }

  public function cerrarSesion()
  {
    unset(
          $_SESSION['SESION_INICIADA'],
          $_SESSION['USUARIO_ID'],
          $_SESSION['EMAIL']
        );

    session_unset();
    session_destroy();

    header('Location:' . URL . 'home/inicioSesion');
    exit;
  }

  public function registro()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/home/registro.php';
    require APP . 'view/_templates/footer.php';
  }

  public function nuevoUsuario()
  {
    if (isset($_POST['btnregistro']))
    {
      // Acá capturo las variables enviadas desde el formulario
      $nombre = $_POST['name'];
      $correo = $_POST['correo'];
      $pass = $_POST['pass'];
      $pass2 = $_POST['pass2'];
      $celular = $_POST['cell'];
      $imagen = $_FILES['archivo']['name'];

      if (strlen($nombre) >= 3 && strstr($correo, "@") && strstr($correo, ".") &&
          strlen($pass) >= 8 && strlen($celular) >= 10 && ($pass === $pass2))
      {
        // Acá se esta mandando le valor de las variables al modelo
        $this->mdlLogin->__SET("NombreUsuario", $nombre);
        $this->mdlLogin->__SET("Correo", $correo);
        $this->mdlLogin->__SET("Clave", $this->Encrypt($pass));
        $this->mdlLogin->__SET('NumeroCelular', $celular);
        $this->mdlLogin->__SET('IdTipoAutenticacion', 1);//Mandamos el 1 como tipo de autenticación
                                                        //ya que fue un usuario creado desde el formulario de registro.
        $this->mdlLogin->__SET('Imagen', $imagen);
        $this->mdlLogin->__SET('FechaModificacion', "");
        $user = $this->mdlLogin->insertarNuevoUsuario();

        if($user)
        {
          $_SESSION['type'] = "success";
          $_SESSION['message'] = "Datos guardados correctamente.";
          header("Location: " . URL . "home/registro");
          exit;
        }
        else
        {
          $_SESSION['type'] = "danger";
          $_SESSION['message'] = "Error insertando los datos, vuelve a intentarlo.";
          header("Location: " . URL . "home/registro");
          exit;
        }
      }
      else
      {
        $_SESSION['errortype'] = "danger";
        $_SESSION['errorcampos'] = "Los valores ingresados no cumplen con los parámetros,
                                    por favor vuelva a intentar";
        header("Location: " . URL . "home/registro");
        exit;
      }
    }
    else
    {
      header("Location: " . URL . "home/registro");
      exit;
    }
  }

  public function loginAdministracion()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/home/administracion.php';
    require APP . 'view/_templates/footer.php';
  }

  public function recuperarPassword()
  {
    require APP . 'view/_templates/header.php';
    require APP . 'view/home/recuperarPassword.php';
    require APP . 'view/_templates/footer.php';
  }

  public function correoRecuperacionPassword()
  {
    if (isset($_POST['enviar']) && isset($_POST['email']))
    {
      echo "Here";
    }
  }

}
