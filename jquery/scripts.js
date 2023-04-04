$(".dark-btn").click(function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  });

$(".glow-btn").click(function(){
    $(".box").toggleClass("glow");
});
$(".spin-btn").click(function(){
    $(".box").toggleClass("spin");
});
$(".reveal-btn").click(function(){
    $(".walter").css({
        "opacity":"1","border":"1px solid"
    });
    $(".reveal-btn").hide();
});

$(".draggable").draggable();