alertify.set("notifier", "position", "top-right");

$(document).ready(function () {

  console.log(document.querySelectorAll('.slide1')); 
  const carousel = document.querySelectorAll('.slide1');
  
  const changeslide = function (sliders) {
    carousel.forEach((slide,index)=> (slide.style.transform = `translateX(${100*(index-sliders)}%)`));
   
  };

    let current1 = 0;
    changeslide(current1);
    $("#next1").on('click', function () {
      current1++;
      if (carousel.length -1 < current1) {
        current1 = 0
      }
      changeslide(current1);
    });
  
    $("#prev1").on('click',function () {
      current1--;
      if (0>=current1) {
        current1 = 0
      }
      changeslide(current1);
    });

  console.log(document.querySelectorAll('.slide2')); 
  const carousel2 = document.querySelectorAll('.slide2');
  
  const changeslide2 = function (sliders) {
    carousel2.forEach((slide,index)=> (slide.style.transform = `translateX(${100*(index-sliders)}%)`));
  };

    let current2 = 0;
    changeslide2(current2);
    $("#next2").on('click', function () {
      current2++;
      if (carousel2.length -1 < current2) {
        current2 = 0
      }
      changeslide2(current2);
    });
  
    $("#prev2").on('click',function () {
      current2--;
      if (0>=current2) {
        current2 = 0
      }
      changeslide2(current2);
    });


  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $("#educat").click(function () {
    $("#education").focus();
    $("#menu").toggleClass("fa-times");
    $("header").removeClass("toggle");
  });

  $("#hom").click(function () {
    $("#home").focus();
    $("#menu").toggleClass("fa-times");
    $("header").removeClass("toggle");
  });

  $("#port").click(function () {
    $("#portfolio").focus();
    $("#menu").toggleClass("fa-times");
    $("header").removeClass("toggle");
  });

  $("#cont").click(function () {
    $("#contact").focus();
    $("#menu").toggleClass("fa-times");
    $("header").removeClass("toggle");
  });

  $("#abou").click(function () {
    $("#about").focus();
    $("#menu").toggleClass("fa-times");
    $("header").removeClass("toggle");
  });

});

$("#send").on("click", function name() {
  let data = $("#form").serialize();

  let name = document.getElementById("nombre").value;
  if (name.length === 0){
    alertify.error("the field name can't be empty");
    $("#nombre").addClass("is-invalid");
    return;
  }else{
    $("#nombre").removeClass("is-invalid");
  }

  let email = document.getElementById("email").value;
  if (email.length === 0){
    alertify.error("the field email can't be empty");
    $("#email").addClass("is-invalid");
    return;
  }else{
    $("#email").removeClass("is-invalid");
  }

  let project = document.getElementById("project").value;
  if (project.length === 0){
    alertify.error("the field project can't be empty");
    $("#project").addClass("is-invalid");
    return;
  }else{
    $("#project").removeClass("is-invalid");
  }

  $.ajax({
    url: "js/send.php",
    type: "POST",
    data: data,
    success: function () {
      alertify.success("information sent correctly");
      $("#nombre").val("");
      $("#project").val("");
      $("#email").val("");
      $("#description").val("");
    },
    error: function (error) {
      alertify.error("There was an error try again");
    },
  });

 

});


 

