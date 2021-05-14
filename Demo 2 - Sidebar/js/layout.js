let headerBox = document.querySelector('header');
let mainBox = document.querySelector('main');
var mainBoxHeight = document.body.clientHeight - headerBox.clientHeight;
mainBox.style.minHeight = mainBoxHeight + 'px';
