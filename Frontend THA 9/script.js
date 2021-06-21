var booked=0;
var rem=42;

$(".btn").on("click",function(e){
    var ele=e.target;
    if($(ele).hasClass("clicked")){
        $(ele).removeClass("clicked").fadeOut(50).fadeIn(50);
        booked--;
        rem++;
    }else{
        $(ele).addClass("clicked").fadeOut(50).fadeIn(50);
        booked++;
        rem--;
    }
    $(".booked").html("<h1>Booked Seats: </h1>"+"<h1>"+booked+"</h1>");
    $(".rem").html("<h1>Remaining Seats: </h1>"+"<h1>"+rem+"</h1>");

});