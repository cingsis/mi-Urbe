
function ValidarFormularioActualizacionForm2()
{
    if (document.formcustomers2.taxid.value == "")
      {
          $("#avisotaxid").show('slow');
          document.formcustomers2.taxid.style.border = "1px solid #f22012";
      }

    if (document.formcustomers2.taxid.value != "")
      {
          $("#avisotaxid").hide('slow');
          document.formcustomers2.taxid.style.border = "1px solid #17dd37";
      }

    if (document.formcustomers2.typecompany.value == "")
      {
          $("#avisotypecompany").show('slow');
          // $(".select2-container--default .select2-selection--single").css("border", "1px solid #f22012");
          document.formcustomers2.typecompany.style.border = "1px solid #f22012";
      }

    if (document.formcustomers2.typecompany.value != "")
      {
          $("#avisotypecompany").hide('slow');
          // $(".select2-container--default .select2-selection--single").css("border", "1px solid #17dd37");
          document.formcustomers2.typecompany.style.border = "1px solid #17dd37";
      }

    if (document.formcustomers2.owner.value == "")
    {
        $("#avisoOwner").show('slow');
        document.formcustomers2.owner.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.owner.value != "")
    {
        $("#avisoOwner").hide('slow');
        document.formcustomers2.owner.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.idnumber.value == "")
    {
        $("#avisonumber").show('slow');
        document.formcustomers2.idnumber.style.border = "1px solid #f22012";
    }


    if (document.formcustomers2.idnumber.value != "")
    {
        $("#avisonumber").hide('slow');
        document.formcustomers2.idnumber.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.address2.value == "")
    {
        $("#avisoaddress2").show("slow");
        document.formcustomers2.address2.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.address2.value != "")
    {
        $("#avisoaddress2").hide("slow");
        document.formcustomers2.address2.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.city2.value == "")
    {
        $("#avisocity2").show('slow');
        document.formcustomers2.city2.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.city2.value != "")
    {
        $("#avisocity2").hide('slow');
        document.formcustomers2.city2.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.state2.value == "")
    {
        $("#avisostate2").show('slow');
        document.formcustomers2.state2.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.state2.value != "")
    {
        $("#avisostate2").hide('slow');
        document.formcustomers2.state2.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.country2.value == "")
    {
        $("#avisocountry2").show('slow');
        // $(".select2-container--default .select2-selection--single").css("border", "1px solid #f22012");
        document.formcustomers2.country2.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.country2.value != "")
    {
        $("#avisocountry2").hide('slow');
        // $(".select2-container--default .select2-selection--single").css("border", "1px solid #17dd37");
        document.formcustomers2.country2.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.zipcode2.value == "")
    {
        $("#avisozipcode2").show('slow');
        document.formcustomers2.zipcode2.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.zipcode2.value != "")
    {
        $("#avisozipcode2").hide('slow');
        document.formcustomers2.zipcode2.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.address3.value == "")
    {
        $("#avisoaddress3").show('slow');
        document.formcustomers2.address3.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.address3.value != "")
    {
        $("#avisoaddress3").hide('slow');
        document.formcustomers2.address3.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.city3.value == "")
    {
        $("#avisocity3").show('slow');
        document.formcustomers2.city3.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.city3.value != "")
    {
        $("#avisocity3").hide('slow');
        document.formcustomers2.city3.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.state3.value == "")
    {
        $("#avisostate3").show('slow');
        document.formcustomers2.state3.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.state3.value != "")
    {
        $("#avisostate3").hide('slow');
        document.formcustomers2.state3.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.country3.value == "")
    {
      $("#avisocountry3").show('slow');
      // $(".select2-container--default .select2-selection--single").css("border", "1px solid #f22012");
        document.formcustomers2.country3.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.country3.value != "")
    {
      $("#avisocountry3").hide('slow');
      // $(".select2-container--default .select2-selection--single").css("border", "1px solid #17dd37");
        document.formcustomers2.country3.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.zipcode3.value == "")
    {
        $("#avisozipcode3").show('slow');
        document.formcustomers2.zipcode3.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.zipcode3.value != "")
    {
        $("#avisozipcode3").hide('slow');
        document.formcustomers2.zipcode3.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.storename.value == "")
    {
        $("#avisostorename").show('slow');
        document.formcustomers2.storename.style.border = "1px solid #f22012";
    }

    if (document.formcustomers2.storename.value != "")
    {
        $("#avisostorename").hide('slow');
        document.formcustomers2.storename.style.border = "1px solid #17dd37";
    }

    if (document.formcustomers2.taxid.value != "" && document.formcustomers2.typecompany.value != "" &&
        document.formcustomers2.owner.value != "" && document.formcustomers2.idnumber.value != "" &&
        document.formcustomers2.address2.value != "" && document.formcustomers2.city2.value != "" &&
        document.formcustomers2.state2.value != "" && document.formcustomers2.zipcode2.value != "" &&
        document.formcustomers2.address3.value != "" && document.formcustomers2.city3.value != "" &&
        document.formcustomers2.state3.value != "" && document.formcustomers2.country3.value != "" &&
        document.formcustomers2.storename.value != "" && document.formcustomers2.zipcode3.value != "")
    {

        $("#avisovalidaciones2").hide('slow');
        $("#avisostate2").hide('slow');
        $("#avisostate3").hide('slow');
        var formData = new FormData($("#form-customers2")[0]);

        var taxid = document.formcustomers2.taxid.value;
        var typecompany = document.formcustomers2.typecompany.value;
        var owner = document.formcustomers2.owner.value;
        var idnumber = document.formcustomers2.idnumber.value;
        var address2 = document.formcustomers2.address2.value;
        var city2 = document.formcustomers2.city2.value;
        var state2 = document.formcustomers2.state2.value;
        var country2 = document.formcustomers2.country2.value;
        var zipcode2 = document.formcustomers2.zipcode2.value;
        var address3 = document.formcustomers2.address3.value;
        var city3 = document.formcustomers2.city3.value;
        var state3 = document.formcustomers2.state3.value;
        var country3 = document.formcustomers2.country3.value;
        var storename = document.formcustomers2.storename.value;
        var zipcode3 = document.formcustomers2.zipcode3.value;

        $.ajax({
          url: url + 'clientes/actualizacionDatosForm2',
          type: 'POST',
          data: formData,
          cache: false,
          contentType: false,
          processData: false,
          beforeSend: function(){
            $("#exitoform2").hide('fast');
            $("#carga3").show("fast");
          },
          success: function(resp){

            if (resp == 1) {
              $("#carga3").hide("slow");
              $("#exitoform2").show('fast');
              setTimeout(function(){
                location.reload();;
              }, 3000);
            }

          }
        });
    }
    else
    {
        $("#avisovalidaciones2").show('slow');
    }
}

function validarLargoTax()
{
  if (document.formcustomers2.taxid.value.length < 3)
  {
      $("#avisolargotaxid").show('slow');
      $("#avisotaxid").hide('slow');
      document.formcustomers2.taxid.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.taxid.value.length >= 3)
  {
      $("#avisolargotaxid").hide('slow');
      document.formcustomers2.taxid.style.border = "1px solid #17dd37";
  }

}

function ValidarLargoOwner()
{
  if (document.formcustomers2.owner.value.length < 3)
  {
      $("#avisolargoOwner").show('slow');
      $("#avisoOwner").hide('slow');
      document.formcustomers2.owner.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.owner.value.length >= 3)
  {
      $("#avisolargoOwner").hide('slow');
      document.formcustomers2.owner.style.border = "1px solid #17dd37";
  }

}

function ValidarLargoNumber()
{
  if (document.formcustomers2.idnumber.value.length < 5)
  {
      $("#avisolargonumber").show('slow');
      $("#avisonumber").hide('slow');
      document.formcustomers2.idnumber.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.idnumber.value.length >= 5)
  {
      $("#avisolargonumber").hide('slow');
      document.formcustomers2.idnumber.style.border = "1px solid #17dd37";
  }

}

function ValidarLargoAddress2()
{
  if (document.formcustomers2.address2.value.length < 10)
  {
      $("#avisolargoaddress2").show('slow');
      $("#avisoaddress2").hide('slow');
      document.formcustomers2.address2.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.address2.value.length >= 10)
  {
      $("#avisolargoaddress2").hide('slow');
      document.formcustomers2.address2.style.border = "1px solid #17dd37";
  }

}

function ValidarLargoCity2()
{
  if (document.formcustomers2.city2.value.length < 3)
  {
      $("#avisolargocity2").show('slow');
      $("#avisocity2").hide('slow');
      document.formcustomers2.city2.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.city2.value.length >= 3)
  {
      $("#avisolargocity2").hide('slow');
      document.formcustomers2.city2.style.border = "1px solid #17dd37";
  }

}

function ValidarLargoState2()
{
  if (document.formcustomers2.state2.value.length < 3)
  {
      $("#avisolargostate2").show('slow');
      $("#avisostate2").hide('slow');
      document.formcustomers2.state2.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.state2.value.length >= 3)
  {
      $("#avisolargostate2").hide('slow');
      document.formcustomers2.state2.style.border = "1px solid #17dd37";
  }

}

function validarTypeCompany()
{

  if (document.formcustomers2.typecompany.value != "")
  {
      $("#avisotypecompany").hide('slow');
      // $(".select2-container--default .select2-selection--single").css("border", "1px solid #17dd37");
      document.formcustomers2.typecompany.style.border = "1px solid #17dd37";
  }
}

function ValidarLargoState3()
{
  if (document.formcustomers2.state3.value.length < 3)
  {
      $("#avisolargostate3").show('slow');
      $("#avisostate3").hide('slow');
      document.formcustomers2.state3.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.state3.value.length >= 3)
  {
      $("#avisolargostate3").hide('slow');
      document.formcustomers2.state3.style.border = "1px solid #17dd37";
  }

}

function ValidarCountry2()
{

  if (document.formcustomers2.country2.value != "")
  {
      $("#avisocountry2").hide('slow');
      // $(".select2-container--default .select2-selection--single").css("border", "1px solid #17dd37");
      document.formcustomers2.country2.style.border = "1px solid #17dd37";
  }
}

function validarLargoZipcode2()
{
  if (document.formcustomers2.zipcode2.value.length < 3)
  {
      $("#avisolargozipcode2").show('slow');
      $("#avisozipcode2").hide('slow');
      document.formcustomers2.zipcode2.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.zipcode2.value.length >= 3)
  {
      $("#avisolargozipcode2").hide('slow');
      document.formcustomers2.zipcode2.style.border = "1px solid #17dd37";
  }

}

function validarLargoAddress3()
{
  if (document.formcustomers2.address3.value.length < 10)
  {
      $("#avisolargoaddress3").show('slow');
      $("#avisoaddress3").hide('slow');
      document.formcustomers2.address3.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.address3.value.length >= 10)
  {
      $("#avisolargoaddress3").hide('slow');
      document.formcustomers2.address3.style.border = "1px solid #17dd37";
  }

}

function validarLargoCity3()
{
  if (document.formcustomers2.city3.value.length < 5)
  {
      $("#avisolargocity3").show('slow');
      $("#avisocity3").hide('slow');
      document.formcustomers2.city3.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.city3.value.length >= 5)
  {
      $("#avisolargocity3").hide('slow');
      document.formcustomers2.city3.style.border = "1px solid #17dd37";
  }

}

function ValidarLargoState3()
{
  if (document.formcustomers2.state3.value.length < 5)
  {
      $("#avisolargostate3").show('slow');
      $("#avisostate3").hide('slow');
      document.formcustomers2.state3.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.state3.value.length >= 5)
  {
      $("#avisolargostate3").hide('slow');
      document.formcustomers2.state3.style.border = "1px solid #17dd37";
  }

}

function ValidarCountry3()
{

  if (document.formcustomers2.country3.value != "")
  {
      $("#avisocountry3").hide('slow');
      // $(".select2-container--default .select2-selection--single").css("border", "1px solid #17dd37");
      document.formcustomers2.country3.style.border = "1px solid #17dd37";
  }
}

function validarLargoZipcode3()
{
  if (document.formcustomers2.zipcode3.value.length < 3)
  {
      $("#avisolargozipcode3").show('slow');
      $("#avisozipcode3").hide('slow');
      document.formcustomers2.zipcode3.style.border = "1px solid #f22012";
  }

  if(document.formcustomers2.zipcode3.value.length >= 3)
  {
      $("#avisolargozipcode3").hide('slow');
      document.formcustomers2.zipcode3.style.border = "1px solid #17dd37";
  }

}


$("#typecompany").select2();
$("#country3").select2();
$("#country2").select2();
