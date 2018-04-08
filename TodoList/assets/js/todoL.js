//check off the todos when clicked or return when was already clicked
$("ul").on("click", "li", function(){
  $(this).toggleClass("sticked");
});

//remove the todo if the X is clicked
$("ul").on("click", "span", function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(400, function(){
    $(this).remove();
  });
});

//creation of new todo
$("input[type='text']").keypress(function(event){
  //see if the user hits enter
  if(event.which == 13){
    //grabs the new todo from input
    var newTodo = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li> <span><i class='fa fa-trash-alt'></i></span> " + newTodo + "</li>")
  }
});

$("#toggle").on("click", function(){
  $("input[type='text']").fadeToggle(200);
});
