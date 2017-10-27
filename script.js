function scroll() {
  var nav = document.getElementsByTagName('nav')[0]
  var logo = document.getElementById('logo_img')
  var offY = window.pageYOffset;
  if (offY < 200) {
    nav.classList.remove('nav_background')
    nav.classList.remove('nav_gone')
    nav.classList.remove('nav_hide')
    logo.src = './assets/K2_Logo.png'
  } else if (offY > 200 && offY < 250) {
    nav.classList.remove('nav_background')
    nav.classList.remove('nav_gone')
    nav.classList.add('nav_hide')
  } else if (offY > 250 && offY < 300) {
    nav.classList.remove('nav_background')
    nav.classList.remove('nav_hide');
    nav.classList.add('nav_gone');
  } else if (offY > 300) {
    nav.classList.remove('nav_hide')
    nav.classList.remove('nav_gone')
    nav.classList.add('nav_background')
    logo.src = './assets/K2_Logo_gray.png'
  }
}
function slide() {
  var menu = document.getElementById('hamburger');
  if (menu.classList.value.includes('hide-slide')) {
    menu.classList.remove('hide-slide');
  } else {
    menu.classList.add('hide-slide')
  }
}
function drop() {
  var menu = document.getElementById('drop');
  if (menu.classList.value.includes('hide-drop')) {
    menu.classList.remove('hide-drop');
  } else {
    menu.classList.add('hide-drop')
  }
}
function hover(i) {
  console.log(i)
  var menu = document.getElementsByClassName('hover')[i];
  if (menu.classList.value.includes('hide-hover')) {
    menu.classList.remove('hide-hover');
  } else {
    menu.classList.add('hide-hover')
  }
}
var thirdlevelclick = document.getElementsByClassName('hover-click')
for (let i = 0; i < thirdlevelclick.length; i++) {
  thirdlevelclick[i].onclick = function() {hover(i)};
}
var thirdlevelhover = document.getElementsByClassName('hover-hover')
for (let i = 0; i < thirdlevelhover.length; i++) {
  thirdlevelhover[i].onpointerenter = function() {hover(i)};
}
document.body.onscroll = scroll;
document.getElementById('hamburger-click').onclick = slide;
document.getElementById('drop-click').onclick = drop;
// document.getElementById('hover-click').onclick = hover;
// document.getElementById('hover-click').onmouseenter = hover;

