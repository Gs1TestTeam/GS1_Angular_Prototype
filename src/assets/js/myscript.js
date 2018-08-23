var data = {
  datasets: [{
    data: [1206, 1078, 1312],
    backgroundColor: [
      "#F7464A",
      "#46BFBD",
      "#FDB45C"
    ]
  }],
  labels: [
    			"MySQL",
    			"MS SQL",
    			"Oracle"
  			]
};

$(document).ready(
  function() {
    //var canvas = document.getElementById("myChart");
    var ctx = document.getElementById("myChart");
    var myNewChart = new Chart(ctx, {
      type: 'pie',
      data: data
    });

    ctx.onclick = function(evt) {
      var activePoints = myNewChart.getElementsAtEvent(evt);
      if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var label = chartData.labels[idx];
        var value = chartData.datasets[0].data[idx];

        var url = "http://example.com/?label=" + label + "&value=" + value;
        console.log(url);
		alert(url);
		if (label == 'Oracle')
				window.open("https://www.oracle.com/index.html");
			else if (label == 'MySQL')
				window.open("http://www.mysql.com");
			else
				window.open("https://www.microsoft.com/en-ca/");
      }
    };
  }
);
