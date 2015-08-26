var g1;
var g1 = new JustGage({
	id: "g1",
	value: 0,
	min: 0,
	max: 1000,
	relativeGaugeSize: true,
	donut: true
});



$('#results').on("me", function () {
	g1.refresh(getRandomInt(0, 100));
});

// Since we don't set a beacon_url, we'll just subscribe to the before_beacon function
// and print the results into the browser itself.
BOOMR.subscribe('before_beacon', function(o) {
    //console.log(o);
	var html = "", t_name, t_other, others = [];

	if(!o.t_other) o.t_other = "";

	for(var k in o) {
		if(!k.match(/^(t_done|t_other|bw|lat|bw_err|lat_err|u|r2?)$/)) {
			if(k.match(/^t_/)) {
				o.t_other += "," + k + "|" + o[k];
			}
			else {
				others.push(k + " = " + o[k]);
			}
		}
	}

	if(o.t_done) { html += "<span>A pagina demorou " + o.t_done + " ms para carregar</span>"; }
	if(o.bw) { html += "<span>Sua conexão é de " + parseInt((o.bw*8/1024)/1024) + "Mbps (Erro de &#x00b1;" + parseInt(o.bw_err*100/o.bw) + "%)</span>"; 
		g1.refresh(parseInt((o.bw*8/1024)/1024));
	}
	if(o.lat) { html += "<span>Seu ping: " + parseInt(o.lat) + "ms (Erro de &#x00b1;" + o.lat_err + "ms)</span>"; }

	var r = document.getElementById('results');
	r.innerHTML = html;

});

