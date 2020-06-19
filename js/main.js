$(document).ready(function () {
  const mMenuBtn = $('.m-menu-button');
  const mMenu = $('.m-menu');
  const body = $('body');

  mMenuBtn.on('click', function () {
    mMenu.toggleClass('active');
    mMenuBtn.toggleClass('active');
    body.toggleClass('no-scroll');
  })
});