var imageAddr = "http://sp1.g8.net.br/speedtest/random3500x3500.jpg";//?x=1440073094894&y=1
var downloadSize = 24262167; //bytes

window.onload = function () {
    var oProgress = document.getElementById("progress");
    oProgress.innerHTML = "Carregando imagem, isso pode demorar um pouco...";
    window.setTimeout(MeasureConnectionSpeed, 1);

    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });

};

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
        var duration = ((endTime - startTime)) / 1000;
        var duration = duration - 3,54; //CORRECAO
        console.log(duration * 1000)
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        oProgress.innerHTML = "Sua velocidade: <br />" +
            speedBps + " bps<br />" +
            speedKbps + " kbps<br />" +
            speedMbps + " Mbps<br />";
    }
}
