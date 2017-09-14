// Check Off Specific Todos By Clicking
$("ul").on("click", "li",function() {
    $(this).toggleClass("completed");
});

//Click X to delete todo
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type=text]").keypress(function(event){
    if (event.which === 13) {
        // Grabbing new text from input
        var inputText = $(this).val();
        $(this).val("");
        // Create a new li and add to ul
        $("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + inputText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type=text]").fadeToggle();
});