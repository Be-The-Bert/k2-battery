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
  if (menu.className.indexOf('hide-slide') > 0) {
    menu.className = menu.className.replace(/\b hide-slide\b/g, "");
  } else {
    menu.className = menu.className + ' hide-slide' 
  }
}
function drop(event) {
  var menu = document.getElementById('drop');
  if (menu.className.indexOf('hide-drop') > 0) {
    menu.className = menu.className.replace(/\b hide-drop\b/g, "");
  } else {
    menu.className = menu.className + ' hide-drop' 
  }
}
function hover(i) {
  var menu = document.getElementsByClassName('hover')[i];
  if (menu.className.indexOf('hide-hover') > 0) {
    menu.className = menu.className.replace(/\b hide-hover\b/g, "");;
  } else {
    menu.className = menu.className + ' hide-hover' 
  }
}

window.onscroll = scroll;
document.getElementById('hamburger-click').onclick = slide;
document.getElementById('drop-click').onclick = drop;

var thirdlevelclick = document.getElementsByClassName('hover-click')
thirdlevelclick[0].onclick = function () { hover(0) };
thirdlevelclick[1].onclick = function () { hover(1) };
thirdlevelclick[2].onclick = function () { hover(2) };
thirdlevelclick[3].onclick = function () { hover(3) };
thirdlevelclick[4].onclick = function () { hover(4) };




