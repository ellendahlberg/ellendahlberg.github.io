$(function(){
    $("li").dblclick(function(){ 
        $(this).toggleClass("selected");
    });
    $("#bgcolor").change(function(){
        $("body").css("background-color", $(this).val());
    });
    $("#textcolor").change(function(){
        $("body").css("color", $(this).val());
    });

    $("#rubrik").focusin(function(){
       $(this).text(""); 
    });
    
    $("#rubrik").focusout(function(){
        $("h1").text($(this).val());
    });
});