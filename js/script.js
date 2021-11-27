 $(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  })

 $('#educat').click(function () {
  $('#education').focus();
  $('#menu').toggleClass('fa-times');
  $('header').removeClass('toggle');
 });

 $('#hom').click(function () {
  $('#home').focus();
  $('#menu').toggleClass('fa-times');
  $('header').removeClass('toggle');
 });

 $('#port').click(function () {
  $('#portfolio').focus();
  $('#menu').toggleClass('fa-times');
  $('header').removeClass('toggle');
 });

 $('#cont').click(function () {
  $('#contact').focus();
  $('#menu').toggleClass('fa-times');
  $('header').removeClass('toggle');
 });

 $('#abou').click(function () {
  $('#about').focus();
 });

 });

