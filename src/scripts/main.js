// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms'),
  build = require('bespoke-theme-build-wars');	
  nebula = require('bespoke-theme-nebula')
  voltaire = require('bespoke-theme-voltaire')
// Bespoke.js
bespoke.from('article', [
  nebula(),
  //voltaire(),
  //build(),
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

$("#judul").click(function(){
  if(document.getElementById("judul").style.color=="blue"){
    $(this).css("color","red");
  }
  else{
    $(this).css("color","blue");
  }
});

document.addEventListener("keydown", tekantombol, false);

function tekantombol(e){
  if(e.keyCode=="65"){
    var chutsia = $("#chutsia")[0];
    chutsia.play();
    }
  
  if(e.keyCode=="16"){
    $("#pertama").css("background","blue");
  }
  if(e.keyCode=="17"){
    $("#pertama").css("background","red");
  }
}