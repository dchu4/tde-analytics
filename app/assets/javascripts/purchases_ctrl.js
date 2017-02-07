(function() {
  "use strict";

  angular.module("app").controller("purchasesCtrl",['$scope','$http',function($scope, $http){

    Chart.defaults.global.defaultColor = '#FF9999';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53', '#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53']

    $scope.purchasesSetup = function(){

      var drc = document.getElementById("revenue_timeline_chart");
      new Chart(drc, {
        type: 'line',
        data: {
          labels: gon.days,
          datasets: [{
            label: 'Daily Revenue',
            data: gon.dailyRevenue,
            backgroundColor: '#FF9999',
            borderColor: '#FF9999',
            borderWidth: 2,
            fill: false
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

      var ptc = document.getElementById("purchases_timeline_chart");
      new Chart(ptc, {
        type: 'line',
        data: {
          labels: gon.days,
          datasets: [{
            label: 'Daily Purchases',
            data: gon.dailyPurchases,
            backgroundColor: '#FF9999',
            borderColor: '#FF9999',
            borderWidth: 2,
            fill: false
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

      var ovt = document.getElementById("os_version_transactions");
      new Chart(ovt, {
        type: 'pie',
        data: {
          labels: gon.osDataLabels,
          datasets: [{
            label: 'Total Number of Purchases',
            data: gon.osVersionTrans,
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

      var dvt = document.getElementById("device_type_transactions");
      new Chart(dvt, {
        type: 'pie',
        data: {
          labels: gon.deviceDataLabels,
          datasets: [{
            label: 'Total Number of Purchases',
            data: gon.deviceTypeTrans,
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

      var ovr = document.getElementById("os_version_revenue");
      new Chart(ovr, {
        type: 'pie',
        data: {
          labels: gon.osDataLabels,
          datasets: [{
            label: 'Total Revenue',
            data: gon.osVersionRev,
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

      var dvr = document.getElementById("device_type_revenue");
      new Chart(dvr, {
        type: 'pie',
        data: {
          labels: gon.deviceDataLabels,
          datasets: [{
            label: 'Total Revenue',
            data: gon.deviceTypeRev,
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