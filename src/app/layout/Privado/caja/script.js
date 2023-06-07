var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.topBoxes = [
    { title: 'Monto Inicial Caja', number: 100 },
    { title: 'Monto Final Caja', number: 200 },
    { title: 'Ganancia Total', number: 300 }
  ];
  $scope.bottomBoxes = [
    { title: 'Transferencia', number: 400 },
    { title: 'Tarjeta', number: 1000 }
  ];
  $scope.buttons = [
    { label: 'Abrir Caja' },
    { label: 'Cerrar Caja' },
    { label: 'Historial de Venta' }
  ];
});
