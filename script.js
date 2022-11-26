var frame = document.getElementById('frame');

var hbtn = document.getElementById('homeBtn');
var logbtn = document.getElementById('logBtn');
var hashbtn = document.getElementById('hashBtn');

hbtn.addEventListener('click', function(){
    //alert('home');
    frame.src="page_main.html";
})
logbtn.addEventListener('click', function(){
    //alert('log');
    frame.src="page_trpglog.html";
})
hashbtn.addEventListener('click', function(){
    //alert('hash');
    frame.src="page_hashtags.html";
})