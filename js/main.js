function sumar(num1, num2) {
    return num1 + num2;
  }
  
 
  function restar(num1, num2) {
    return num1 - num2;
  }
  
 
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  
  function dividir(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "No se puede dividir entre cero";
    }
  }
  
  // Menu de opciones
  function mostrarMenu() {
    console.log("===== CALCULADORA =====");
    console.log("Opciones disponibles:");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir");
  }
  
  function leerOpcion() {
    var opcion = parseInt(prompt("Selecciona una opción:"));
    return opcion;
  }
  
  function realizarOperacion(opcion) {
    var numero1, numero2, resultado;
  
    switch (opcion) {
      case 1:
        numero1 = parseFloat(prompt("Ingresa el primer número:"));
        numero2 = parseFloat(prompt("Ingresa el segundo número:"));
        resultado = sumar(numero1, numero2);
        console.log("El resultado de la suma es: " + resultado);
        break;
      case 2:
        numero1 = parseFloat(prompt("Ingresa el primer número:"));
        numero2 = parseFloat(prompt("Ingresa el segundo número:"));
        resultado = restar(numero1, numero2);
        console.log("El resultado de la resta es: " + resultado);
        break;
      case 3:
        numero1 = parseFloat(prompt("Ingresa el primer número:"));
        numero2 = parseFloat(prompt("Ingresa el segundo número:"));
        resultado = multiplicar(numero1, numero2);
        console.log("El resultado de la multiplicación es: " + resultado);
        break;
      case 4:
        numero1 = parseFloat(prompt("Ingresa el primer número:"));
        numero2 = parseFloat(prompt("Ingresa el segundo número:"));
        resultado = dividir(numero1, numero2);
        console.log("El resultado de la división es: " + resultado);
        break;
      case 5:
        console.log("Gracias por utilizar la calculadora. ¡Hasta luego!");
        break;
      default:
        console.log("Opción inválida. Por favor, selecciona una opción válida.");
        break;
    }
  }
  
  // Función principal que ejecuta el simulador interactivo
  function calcular() {
    var opcion;
  
    do {
      mostrarMenu();
      opcion = leerOpcion();
      realizarOperacion(opcion);
      console.log(""); // Espacio en blanco para mejor legibilidad
    } while (opcion !== 5);
  }
  
  calcular();