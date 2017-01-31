(function() {
  "use strict";

  angular.module("app").controller("productsCtrl",['$scope','$http',function($scope, $http){

    Chart.defaults.global.defaultColor = '#F05A28';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1', '#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1']

    $scope.productsSetup = function(){
      $http.get('api/v1/products.json').then(function(result) {
        var visitPurchaseChartData = {
          labels: result.data["product_hash_names"],
          datasets: [
            {
              label: 'Visits Per Product',
              data: result.data["product_visits"],
              backgroundColor: '#FF9999',
              borderColor: '#FF9999',
              borderWidth: 2,
              fill: false
            },
            {
              label: 'Purchases Per Product',
              data: result.data["sorted_purchases"],
              backgroundColor: '#EE4036',
              borderColor: '#EE4036',
              borderWidth: 2,
              fill: false
            }
          ]
        };
        var vpc = document.getElementById("visit_purchase_chart");
        var visitPurchaseChart = new Chart(vpc, {
          type: 'bar',
          data: visitPurchaseChartData,
          options: { 
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false
                }
              }]
            }
          }
        })
      })
    }

    window.scope = $scope;
  }])
}());