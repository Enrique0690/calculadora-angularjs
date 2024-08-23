// Define el módulo principal de la aplicación
var app = angular.module('calculadoraApp', []);

// Define el controlador de la calculadora
app.controller('CalculadoraController', function($scope) {
    $scope.resultado = ''; // Inicializa el resultado como una cadena vacía

    // Función para agregar valores al campo de resultado
    $scope.agregar = function(valor) {
        $scope.resultado += valor;
    };

    // Función para calcular el resultado de la expresión
    $scope.calcular = function() {
        try {
            $scope.resultado = eval($scope.resultado);
        } catch (e) {
            $scope.resultado = 'Error';
        }
    };

    // Función para limpiar el campo de resultado
    $scope.limpiar = function() {
        $scope.resultado = '';
    };

    // Función para verificar la tecla Enter
    $scope.checarEnter = function(event) {
        if (event.key === "Enter") {
            $scope.calcular();
        }
    };
});
