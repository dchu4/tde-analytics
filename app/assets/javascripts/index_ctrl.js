var visitsTimelineChart;
var countriesChart;
var productsChart;
var citiesChart;
var deviceOsChart;
var deviceModelChart;

(function() {
  "use strict";

  angular.module("app").controller("indexCtrl",['$scope','$http',function($scope, $http){

    Chart.defaults.global.defaultColor = '#FF9999';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F']

    $scope.dashboardIndexSetup = function(){
      $http.get('/api/v1/charts.json').then(function(result) {

        // timeline chart
        var timelineChartData = {
          labels: result.data["dates"],
          datasets: [{
            label: 'Number of Visits',
            data: result.data["numbers"],
            backgroundColor: '#FF9999',
            borderColor: '#FF9999',
            borderWidth: 2,
            fill: false
          }]
        };
        var vtc = document.getElementById("visits_timeline_chart");
        visitsTimelineChart = new Chart(vtc, {
          type: 'line',
          data: timelineChartData,
          options: { 
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false
                }
              }]
            }
          }
        });

        // countries chart
        var countryChartData = {
          labels: result.data["countries"],
          datasets: [{
            data: result.data["country_visits"],
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        };
        var cc = document.getElementById("countries_chart");
        countriesChart = new Chart(cc, {
          type: 'pie',
          data: countryChartData,
          options: {
            legend: {
              display: true
            }
          }
        });

        // products_chart
        var productsChartData = {
          labels: result.data["product_names"],
          datasets: [{
            label: 'Number of Views',
            data: result.data["visit_counts"],
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        };
        var pc = document.getElementById("products_chart");
        productsChart = new Chart(pc, {
          type: 'bar',
          data: productsChartData,
          options:{ 
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            },
            legend: {
              display: false
            }
          }
        });

        // cities chart
        var cityChartData = {
          labels: result.data["cities"],
          datasets: [{
            data: result.data["city_visits"],
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        };
        var cic = document.getElementById("cities_chart");
        citiesChart = new Chart(cic, {
          type: 'doughnut',
          data: cityChartData,
          options: {
            legend: {
              display: true
            }
          }
        });


        // device os chart
        var osChartData = {
          labels: result.data["device_os_names"],
          datasets: [{
            label: 'Number of Users',
            data: result.data["device_oss"],
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        };
        var osc = document.getElementById("device_os_chart");
        deviceOsChart = new Chart(osc, {
          type: 'bar',
          data: osChartData,
          options:{ 
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            },
            legend: {
              display: false
            }
          }
        });

        // device model chart
        var modelChartData = {
          labels: result.data["device_model_names"],
          datasets: [{
            data: result.data["device_models"],
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        };
        var mc = document.getElementById("device_model_chart");
        deviceModelChart = new Chart(mc, {
          type: 'pie',
          data: modelChartData,
          options: {
            legend: {
              display: true
            }
          }
        });

      });
    };

    window.scope = $scope;
  }])
}());