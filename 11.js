t = setInterval (function() {
    var s = document.getElementById ('mT'),
    f = function (x) {
        return (x / 100).toFixed (2).substr (2)
    }, 
    d = ':',
    y = s.innerHTML.split (d), 
    z = --y [2] + y [0] * 3.6e3 + y [1] * 60;
 
    if (!z) clearInterval (t); 
    s.innerHTML = [
        f (Math.floor (z / 3600)),
        f (Math.floor (z % 3600 / 60)), 
        f (z % 3600 % 60)
    ].join (d);
}, 1000);