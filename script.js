
// var m = "Hello"
// var n = "My Name is Irvin"
// function p(i, o) {
//     document.getElementById("txt").innerHTML += m.charAt(i)
//     document.getElementById("txt").innerHTML += n.charAt(o)
//     if (i<m.length) {window.setTimeout(function() {p(++i);}, 100)}
//     if (i=m.length || o<n.length) {window.setTimeout(function() {p(++o);}, 100)}
// }
// p(0);

// function x(o) {
//     document.getElementById("txt2").innerHTML += n.charAt(o);
//     if (i=m.length || o<n.length) {window.setTimeout(function() {x(++o);}, 100)}
// }
// x(0);

textAnimation (['Hello World.', 'My Name is Irvin.', 'I am an Aspiring Developer, Looking to Start my Career.', 'Passionate in Learning and Making Good Code.'], "text")

function textAnimation(words, id) {
    var visible = true;
    var con = document.getElementById('console')
    var letterCount = 1
    var x = 1
    var waiting = false
    var target = document.getElementById(id)
    window.setInterval( function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout ( function () {
                var usedWord = words.shift()
                words.push(usedWord)
                x = 1
                letterCount += x
                waiting = false
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true
            window.setTimeout( function () {
                x = -1
                letterCount += x
                waiting = false
            }, 1000)
        } else if ( waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x
        }
    }, 120)
    window.setInterval (function () {
        if (visible === true){
            con.className = 'console-bar hidden'
            visible = false
        } else {
            con.className = 'console-bar'
            visible = true
        }
    }, 400)
}