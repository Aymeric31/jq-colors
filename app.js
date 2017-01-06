//Ca fonctionne => changement couleur
 var cocher = [":checkbox"]; 
 $(":checkbox").click(function(){
 	$("p").css("color", "red");
 	console.log(":checkbox");
 });


$(".color").click(function(){
	var color = ($(this).attr("data-color"));
	console.log (color);
	$(this).css("background-color", color);
});

//   var cocher = $("[type = 'checkbox']");

//   cocher.click(function(){
//   if ($(":checkbox").is("checked")){
//   	$(".main").css("color", "red");
//   	console.log(":checkbox");
// }else{
// 	$(".main").css("color", "black");
// }
// });