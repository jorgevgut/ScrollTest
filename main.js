$(document).on('ready',function(){

for( var i=0;i<=50;i++ ){

	$("section").append($("<article> <h1>"+i+"</h1> </article>"))
}



var indice=1;


$(window).on('scroll',function(){
var obj=$("section article:nth-child("+indice+")")
,	arriba=Math.floor(obj.offset().top-100)
,	abajo=Math.floor(obj.offset().top+obj.height()-100)
,	page=$(this).scrollTop();

console.log(arriba)




if( page > arriba && page < abajo ){

	indice++
	console.log("rango "+indice)
	obj.css({'-webkit-animation':'nombre 1s'});
//	obj.children("p").css({'-webkit-animation':'nombre 0.5s','opacity':'1'});
	
	

}




if( indice >= $("section article").length ){

	indice=$("section article").length
}








/*
var obj=$("section div:nth-child("+indice+")");
var arriba=obj.offset().top-100;
var abajo=obj.offset().top+$("section:nth-child(1)").height();

var page=$(window).scrollTop()

if( page > arriba && page < abajo ) {

		
		indice++	
		console.log("rango "+indice)
		obj.css({'background':'red'})
		//obj.css({'-webkit-animation':'nombre 2s'})
}else{
		obj.css({'background':'darkred'});
}

*/

});



});//termina jquery