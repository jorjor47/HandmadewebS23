$(".spin-btn").click(function(){
    $(".hellomessage").toggleClass("spin");
    $(".button").toggleClass("spin");
});
$("#button").on('click', function (e) {
    e.preventDefault();
    var $self = $(this);
    $self.before($self.prev('table').clone());
});

$(".color-btn").click(function(){
    $(".buttonspace").toggleClass("color");
    $("body").toggleClass("color");
    $("button").toggleClass("color");
  });

function duplicateHello() { //change  
    let helloClone = $('#hello').clone();
  
    $('.right').append(helloClone);
    helloClone.css({
      "right": Math.random() * window.innerWidth,
      "top": Math.random() * window.innerHeight
    }) }

const slider = document.getElementById("slider");
const root = document.documentElement;
    
slider.addEventListener("input", (e) => {
     root.style.setProperty("--radius", e.target.value + "%");
});