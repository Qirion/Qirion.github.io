var imageAddr = "1-58MB.jpg";
var downloadSize = 1661698; //bytes
var times = 0;
var data;
var leChart;

function go() {
    var oProgress = document.getElementById("progress");
    oProgress.innerHTML = "Carregando imagem, isso pode demorar um pouco...";
    window.setTimeout(MeasureConnectionSpeed, 1);

}

function MeasureConnectionSpeed() {
    var oProgress = document.getElementById("progress");
    var startTime, endTime;
    var download = new Image();

    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }

    download.onerror = function (err, msg) {
        oProgress.innerHTML = "ERRO!, imagem invalida, ou 404";
    }

    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {

        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        oProgress.innerHTML = "Sua velocidade: <br />" +
            speedBps + " bps<br />" +
            speedKbps + " kbps<br />" +
            speedMbps + " Mbps<br />";
        updateChart(speedMbps);
    }
}

function updateChart(var value) {
    if (times == 0) {
        data = {
            // A labels array that can contain any sort of values
            labels: ['1', '2', '3', '4', '5'],
            // Our series array that contains series objects or in this case series data arrays
            series: [
    [value]
  ]
        };

        // Create a new line chart object where as first parameter we pass in a selector
        // that is resolving to our chart container element. The Second parameter
        // is the actual data object.
        leChart = new Chartist.Line('.ct-chart', data);

    }

}