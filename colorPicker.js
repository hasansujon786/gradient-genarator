var lPicker = document.getElementById('lPicker')
var rPicker = document.getElementById('rPicker')
var button = document.getElementById('button')
var html = document.querySelector('html')
var css = document.querySelector('#css')

lPicker.addEventListener('input', cngBackground)  

rPicker.addEventListener('input', cngBackground)


function cngBackground() {
  html.style.background = 'linear-gradient(to right,' + lPicker.value + ',' + rPicker.value + ')';
  css.textContent = 'linear-gradient(to right,' + ' ' + lPicker.value + ', ' + rPicker.value + ');';
}

