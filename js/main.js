// mark as completed
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
})

// delete a todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
	event.stopPropagation()
})

// hide the input box
$(".fa-plus").on("click", function(){
	$("input").fadeToggle()
})

// add new todo
$("input").keypress(function(event){
	if(event.which ===13){
		var todo = $(this).val()
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
		$(this).val("")
	}
})