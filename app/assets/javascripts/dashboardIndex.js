$(document).ready(function() {

  $.getJSON('api/v1/charts', function(result) {
    // timeline chart
    var timelineChartData = {
      labels: result["dates"],
      datasets: [{
        label: 'Number of Visits',
        data: result["numbers"],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
        borderWidth: 1
      }]
    };
    var vtc = document.getElementById("visits_timeline_chart");
    var visitsTimelineChart = new Chart(vtc, {
      type: 'line',
      data: timelineChartData
    });

    // countries chart
    var countryChartData = {
      labels: result["countries"],
      datasets: [{
        label: 'Number of Visits',
        data: result["visits"],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    };
    var cc = document.getElementById("countries_chart");
    var countries_chart = new Chart(cc, {
      type: 'doughnut',
      data: countryChartData
    });

  });
});