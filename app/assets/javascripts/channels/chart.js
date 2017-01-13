App.room = App.cable.subscriptions.create("ChartChannel", {
  connected: function(){},
  
  disconnected: function(){},

  received: function(){

    $.getJSON('api/v1/charts', function(dataResults) {
      // console.log(dataResults);
      // myChart.data.datasets[0].data = dataResults;
      visitsTimelineChart.update();
    });

  }

});