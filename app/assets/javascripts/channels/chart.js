App.room = App.cable.subscriptions.create("ChartChannel", {
  connected: function(){},
  
  disconnected: function(){},

  received: function(){

    $.getJSON('/api/v1/charts' + window.location.pathname, function(dataResults) {
      // console.log(dataResults);
      // myChart.data.datasets[0].data = dataResults;
      // myChart.update();
      switch(window.location.pathname) {
        case "/":
            // code block
            break;
        case n:
            // code block
            break;
        default:
            dataResults;
      }
    });

  }

});