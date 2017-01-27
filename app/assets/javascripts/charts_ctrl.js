(function() {
  "use strict";

  angular.module("app").controller("chartsCtrl",['$scope','$http',function($scope, $http){
    var visitsTimelineChart;
    var countriesChart;
    var productsChart;
    var citiesChart;
    var deviceOsChart;
    var deviceModelChart;
    var worldChart;

    Chart.defaults.global.defaultColor = '#F05A28';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1', '#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1']

    $scope.dashboardIndexSetup = function(){
      $http.get('api/v1/charts.json').then(function(result) {

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
            backgroundColor: colorArray
          }]
        };
        var cc = document.getElementById("countries_chart");
        countriesChart = new Chart(cc, {
          type: 'pie',
          data: countryChartData
        });

        // products_chart
        var productsChartData = {
          labels: result.data["product_names"],
          datasets: [{
            label: 'Number of Views',
            data: result.data["visit_counts"],
            backgroundColor: colorArray
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
            backgroundColor: colorArray
          }]
        };
        var cic = document.getElementById("cities_chart");
        citiesChart = new Chart(cic, {
          type: 'doughnut',
          data: cityChartData
        });


        // device os chart
        var osChartData = {
          labels: result.data["device_os_names"],
          datasets: [{
            label: 'Number of Users',
            data: result.data["device_oss"],
            backgroundColor: colorArray
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
            backgroundColor: colorArray
          }]
        };
        var mc = document.getElementById("device_model_chart");
        deviceModelChart = new Chart(mc, {
          type: 'pie',
          data: modelChartData
        });

      });
    };

    $scope.locationsSetup = function(){
      google.charts.load('upcoming', {'packages':['geochart']});

      google.charts.setOnLoadCallback(drawMaps);

      function drawMaps() {

        $.getJSON('/api/v1/location_charts', function(json) {
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
      }
    }
    $scope.purchasesSetup = function(){
      Chart.defaults.global.defaultColor = '#F05A28';
      Chart.defaults.global.elements.responsive = true;

      var colorArray = ['#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1', '#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1'];

      var mac = document.getElementById("monthly_amount_chart");
      new Chart(mac, {
        type: 'bar',
        data: {
          labels: gon.monthlyLabels,
          datasets: [{
            label: 'Total Purchase Amount',
            data: gon.monthlyAmount,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
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
      })

      var mqc = document.getElementById("monthly_quantity_chart");
      new Chart(mqc, {
        type: 'bar',
        data: {
        labels: gon.monthlyLabels,
          datasets: [{
            label: 'Total Quantity Purchased',
            data: gon.monthlyQuantity,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
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
      })

      var bac = document.getElementById("biweekly_amount_chart");
      new Chart(bac, {
        type: 'bar',
        data: {
          labels: gon.biweeklyLabels,
          datasets: [{
            label: 'Total Purchase Amount',
            data: gon.biweeklyAmount,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
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
      })

      var bqc = document.getElementById("biweekly_quantity_chart");
      new Chart(bqc, {
        type: 'bar',
        data: {
        labels: gon.biweeklyLabels,
          datasets: [{
            label: 'Total Quantity Purchased',
            data: gon.biweeklyQuantity,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
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
      })

      var wac = document.getElementById("weekly_amount_chart");
      new Chart(wac, {
        type: 'bar',
        data: {
          labels: gon.weeklyLabels,
          datasets: [{
            label: 'Total Purchase Amount',
            data: gon.weeklyAmount,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
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
      })

      var wqc = document.getElementById("weekly_quantity_chart");
      new Chart(wqc, {
        type: 'bar',
        data: {
        labels: gon.weeklyLabels,
          datasets: [{
            label: 'Total Quantity Purchased',
            data: gon.weeklyQuantity,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
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
      })

      var yac = document.getElementById("yesterday_amount_chart");
      new Chart(yac, {
        type: 'bar',
        data: {
          labels: gon.yesterdayLabels,
          datasets: [{
            label: 'Total Purchase Amount',
            data: gon.yesterdayAmount,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
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
      })

      var yqc = document.getElementById("yesterday_quantity_chart");
      new Chart(yqc, {
        type: 'bar',
        data: {
        labels: gon.yesterdayLabels,
          datasets: [{
            label: 'Total Quantity Purchased',
            data: gon.yesterdayQuantity,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
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
      })
    }

    $scope.productsSetup = function(){
      $http.get('api/v1/charts.json').then(function(result) {
        var monthTimelineChartData = {
          labels: result.data["product_visit_dates"],
          datasets: [
            {
              label: 'Number of Visits',
              data: result.data["product_visit_counts"],
              backgroundColor: '#FF9999',
              borderColor: '#FF9999',
              borderWidth: 2,
              fill: false
            },
            {
              label: 'Number of Purchases',
              data: result.data["month_product_purchases"],
              backgroundColor: '#EE4036',
              borderColor: '#EE4036',
              borderWidth: 2,
              fill: false
            }
          ]
        };
        var mtc = document.getElementById("month_timeline_chart");
        var monthTimelineChart = new Chart(mtc, {
          type: 'line',
          data: monthTimelineChartData,
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
        });

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