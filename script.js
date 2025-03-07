  //Función para calcular el índice de masa corporal (IMC)
  function CalcularIMC(sexo, altura, peso) 
  {
    //La función Math.roud sirve para redondear valores
    altura = Math.round(altura) / 100;
    peso = Math.round(peso);
    //La función Math.pow sirve para calcular potencias
    var indice = (peso / Math.pow(altura, 2));
    var resultado = "";
    //Sexo, si es "m" mujer y si es "h" hombre
    switch (sexo)
    {
      case "m":
        if (indice < 20)
        {
          resultado = "Peso inferior al normal.";
        }
        else if (indice >= 20 && indice < 24)
        {
          resultado = "Peso Normal.";
        }
        else if (indice >= 24 && indice < 29)
        {
          resultado = "Peso superior al normal.";
        }
        else
        {
          resultado = "Obesidad.";
        }  
        break
      case "h":
        if (indice < 21)
        {
          resultado = "Peso inferior al normal.";
        }
        else if (indice >= 21 && indice < 25)
        {
          resultado = "Peso Normal.";
        }
        else if (indice >= 25 && indice < 30)
        {
          resultado = "Peso superior al normal.";
        }
        else
        {
          resultado = "Obesidad";
        }		   
        break
      default:
        resultado = "No se ha podido calcular. No ha indicado h (hombre) o m (mujer).";
    }
    //Con toFixed reduciremos a 2 el número de decimales a mostrar
    return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
  }

  //Función para mostrar el resultado por pantalla
  function MostrarResultadoIMC (sexo, altura, peso, indice)
  {
    var mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;

      Document.write(mensaje);
  }	

  //Petición de datos al usuario (sexo, altura, peso)
  var sexo = prompt("Indique su sexo, una 'h' para hombre o una 'm' para mujer:", "");
  //La función parseInt permite convertir un string en número
  var altura = parseInt(prompt("Indique su altura en centímetros:", ""));
  var peso = parseInt(prompt("Indique su peso en kilógramos:", ""));

  //Llamamos a las funciones anteriores para el cálculo y para mostrar los resultados
  var resultado = CalcularIMC(sexo, altura, peso);
MostrarResultadoIMC(sexo, altura, peso, resultado);   
