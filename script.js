var m = "Hello World"
function p(i) {
    document.getElementById("txt").innerHTML += m.charAt(i);
    if (i<m.length) {window.setTimeout(function() {p(++i);}, 100)}
}
p(0);