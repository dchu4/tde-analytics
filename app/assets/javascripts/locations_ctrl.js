var worldChart;

(function() {
  "use strict";

  angular.module("app").controller("locationsCtrl",['$scope','$http',function($scope, $http){

    Chart.defaults.global.defaultColor = '#FF9999';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53', '#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53']

    $scope.locationsSetup = function(){
      google.charts.load('upcoming', {'packages':['geochart']});

      google.charts.setOnLoadCallback(drawMaps);

      function drawMaps() {
        console.log(gon.countryPurchases);

        //realtime visits map
        $.getJSON('/api/v1/locations.json', function(json) {
          //world map
          var worldData = new google.visualization.arrayToDataTable(json["world_chart"]);

          var worldOptions = {
            colorAxis: {
              colors: ['#FF9999', '#EE4036']
            }
          };

          worldChart = new google.visualization.GeoChart(document.getElementById('world_chart'));
          worldChart.draw(worldData, worldOptions);
        })

        //non-realtime purchases map
        var purchaseData = new google.visualization.arrayToDataTable(gon.countryPurchases);

        var purchaseOptions = {
          colorAxis: {
            colors: ['#FF9999', '#EE4036']
          }
        };

        var purchaseChart = new google.visualization.GeoChart(document.getElementById('purchase_chart'));
        purchaseChart.draw(purchaseData, purchaseOptions);
      }

      var crc = document.getElementById("country_revenue_chart");
      new Chart(crc, {
        type: 'pie',
        data: {
          labels: gon.countryLabels,
          datasets: [{
            label: 'Total Revenue',
            data: gon.countryRevenue,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
        options: {
          legend: {
            display: true
          }
        }
      })
    }

    window.scope = $scope;
  }])
}());