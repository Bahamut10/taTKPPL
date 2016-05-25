// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
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
  cube(),
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

function tekantombol(e){
  //reset warna
  if(e.keyCode=="39" || e.keyCode=="37"){
    $(".jawab").css("background-color","rgb(234, 234, 234)");
  }

  if(e.keyCode=="16"){
    $(".jawab").css("background-color","blue");
    e.preventDefault();
  }
  else if(e.keyCode=="17"){
    $(".jawab").css("background-color","red");
    e.preventDefault();
  }

}