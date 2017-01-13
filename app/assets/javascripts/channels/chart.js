App.room = App.cable.subscriptions.create("ChartChannel", {
  connected: function(){},
  
  disconnected: function(){},

  received: function(){

    $.getJSON('messages', function(dataResults) {
      // console.log(dataResults);
      // myChart.data.datasets[0].data = dataResults;
      // myChart.update();
    });
  }

});