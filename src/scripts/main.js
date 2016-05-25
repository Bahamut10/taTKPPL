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
  build(),
  nebula(),
  voltaire(),
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

function tekantombol(e){
  var lokasi = window.location.href;
  //reset warna
  if(e.keyCode=="39" || e.keyCode=="37"){
    $(".jawab").css("background-color","rgb(234, 234, 234)");
    flag = 0;
  }

  if(e.keyCode=="16" && flag==0){
    $(".jawab").css("background-color","blue");
    flag = 1;
  }
  if(e.keyCode=="17" && flag==0){
    $(".jawab").css("background-color","red");
    flag = 1;
  }

}