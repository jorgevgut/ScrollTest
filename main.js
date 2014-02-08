$(document).on('ready',function(){

for( var i=0;i<=34;i++ ){

	$("section").append($("<article> <h1>"+i+"</h1> <div>ARTICULO</div> </article>"));
}


var indice=5;
var uno=1;
var dos=2;

$(window).on('scroll',function(){

uno++
dos++

var obj=$("section article:nth-child("+indice+")")
,	arriba=Math.floor(obj.offset().top-200)
,	abajo=Math.floor(obj.offset().top+obj.height()-200)
,	page=$(this).scrollTop();




if( page > arriba && page < abajo ){

	indice++
	
if( uno < dos ){

	obj.css({'-webkit-animation':'par 0.8s','-webkit-animation-fill-mode':'forwards'});
	dos--

}else{
	obj.css({'-webkit-animation':'Impar 0.8s','-webkit-animation-fill-mode':'forwards'});
	dos++
}




}




if( indice >= $("section article").length ){

	indice=$("section article").length
}


});



});//termina jquery