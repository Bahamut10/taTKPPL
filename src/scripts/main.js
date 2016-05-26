// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  voltaire = require('bespoke-theme-voltaire'),
  nebula = require('bespoke-theme-nebula'),
  build = require('bespoke-theme-build-wars'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  //cube(),
  //build(),
  nebula(),
  //voltaire(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

document.addEventListener("keydown", tekantombol, false);

var flag = 0;
var flag1 = 0;
var counter = 0;
var lokasi;

var othello = new Array(8);
for(var i=0; i<8; i++){
  othello[i] = new Array(8);
  for(var j=0; j<8; j++){
    othello[i][j] = '_';
  }
}


function tekantombol(e){
  lokasi = window.location.href;
  //reset warna //arrow-left or arrow-right
  if(e.keyCode=="39" || e.keyCode=="37"){
    $(".jawab").css("background-color","rgb(234, 234, 234)");
    flag = 0;
    flag1 = 0;
    counter = 0;
  }
  //shift
  if(e.keyCode == "16" && flag == 0){
    $(".jawab").css("background-color","blue");
    flag = 1;
  }
  //ctrl
  if(e.keyCode == "17" && flag == 0){
    $(".jawab").css("background-color","red");
    flag = 1;
  }
  //block mouse right-click
  $("section").bind("contextmenu", function(ev){
    ev.preventDefault();
    return false;
  });
  if(lokasi == "http://localhost:8080/#8" && flag1 == 0){
    $("section#othello > div").empty()
    .append("|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<br>")
    .append("|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<br>")
    .append("|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<br>")
    .append("|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<br>")
    .append("|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<br>")
    .append("|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<br>")
    .append("|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<br>")
    .append("|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<br>")
    .append("|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|<b>_</b>|");
    flag1 = 1;
  }

  $("section#othello > div > b").bind("click", function(ev){
    var char = $(this).text();
    if(counter % 2 == 0 && char == '_'){
      $(this).empty().append("o");
      counter += 1;
    }
    else if(counter % 2 == 1 && char == '_'){
      $(this).empty().append("x");
      counter += 1;
    }
  });
}
