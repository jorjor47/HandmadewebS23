const slider = document.getElementById("slider");
const root = document.documentElement;

slider.addEventListener("input", (e) => {
    root.style.setProperty("--radius", e.target.value + "%");
});


$(".dark-btn").click(function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  });

$(".glow-btn").click(function(){
    $(".box").toggleClass("glow");
});
$(".spin-btn").click(function(){
    $(".box").toggleClass("spin");
    $(".button").toggleClass("spin");
});
$(".spin-btn").click(function(){
    $(".drawer1").toggleClass("spin");
});
$(".reveal-btn").click(function(){
    $(".walter").css({
        "opacity":"1","border":"1px solid"
    });
    $(".reveal-btn").hide();
});
$(".button").click(function(){
    $(".drawer1").css({
        "height":"200","border":"1px solid"
    });
});
$(".drawer1-btn").click(function(){
    $(".drawer1").toggleClass("pulldown");
});
$(".drawer2-btn").click(function(){
    $(".drawer2").toggleClass("further");
});
$(".random-btn").click(function(){
    $(".testerbox").css("height", Math.floor((Math.random()*100)+1));
});
$( ".random-btn" ).one( "click", function() {
    $( this ).css( "height", "+=200" );
});

// this is for making divs bigger on a click
// $( "div" ).on( "click", function() {
//     $( this ).css({
//       width: function( index, value ) {
//         return parseFloat( value ) * 1.2;
//       },
//       height: function( index, value ) {
//         return parseFloat( value ) * 1.2;
//       }
//     });
//   });

$(".draggable").draggable();

document.querySelectorAll(".wrapper > *").forEach((div)=>{
    div.style.height = Math.round((Math.random() * (500 - 100)) + 100);
    var color = Math.round(Math.random()*16777215).toString(16);
    color = "0".repeat(6 - color.length)  + color;
    div.style.backgroundColor = "#" + color;
});