console.log('This would be the main JS file.');
$.getJSON("data/data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
})
