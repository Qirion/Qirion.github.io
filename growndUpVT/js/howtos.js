// Since we don't set a beacon_url, we'll just subscribe to the before_beacon function
// and print the results into the browser itself.
BOOMR.subscribe('before_beacon', function(o) {
    console.log(o);
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

	if(o.t_done) { html += "A pagina demorou " + o.t_done + " ms para carregar<br>"; }
//	if(o.t_other) {
//		t_other = o.t_other.replace(/^,/, '').replace(/\|/g, ' = ').split(',');
//		html += "Outros timers coletados: <br>";
//		for(var i=0; i<t_other.length; i++) {
//			html += "&nbsp;&nbsp;&nbsp;" + t_other[i] + " ms<br>";
//		}
//	}
	if(o.bw) { html += "Suea conexão é de " + parseInt((o.bw*8/1024)/1024) + "Mbps (Erro de &#x00b1;" + parseInt(o.bw_err*100/o.bw) + "%)<br>"; }
	if(o.lat) { html += "Seu ping: " + parseInt(o.lat) + "ms (Erro de &#x00b1;" + o.lat_err + "ms)<br>"; }

	var r = document.getElementById('results');
	r.innerHTML = html;

//	if(others.length) {
//		r.innerHTML += "Other parameters:<br>";
//
//		for(var i=0; i<others.length; i++) {
//			var t = document.createTextNode(others[i]);
//			r.innerHTML += "&nbsp;&nbsp;&nbsp;";
//			r.appendChild(t);
//			r.innerHTML += "<br>";
//
//		}
//	}

});

