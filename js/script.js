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

$("#send").on("click", function name() {
   var data = $("#form").serialize();
   $.ajax({
    url: "js/send.php",
    type: "POST",
    data: data,
    success: function () {
    alert("Information send succesfuly");
     $("#nombre").val("");
     $("#project").val("");
     $("#email").val("");
     $("#description").val("");
    },
    error: function (error) {
      alert("Error");
    },
   });

});