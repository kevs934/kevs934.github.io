var n=parseInt(Math.random()*5+1);
var img=document.getElementById("img");

$(document).ready(function () {
    img.src="img/"+n+".jpg";
});

$(document).ready(function(){

	$("#enviar").click(function(){
		var coment=$("#coment").val();
		var edad=$("#edad").val();
        var res=$("#respuesta").val();
		
		if (edad==""||edad<18)
		{

			alert("Edad incorrecta");
			
		}
		else
		{
			if(coment.length<5)
			{
				
                alert("El comentario debe tener 5 o mas caracteres");            

			}
			else{

                
                if (res.indexOf('v4xBG')>=0 || res.indexOf('MY5N5')>=0
                || res.indexOf('smwm')>=0 || res.indexOf('overlooks')>=0
                || res.indexOf('a861')>=0) {
                    document.forms['registrar'].submit();
                }
                else
                {			
                    alert("El captcha es incorrecto");
                }
			}
		}
	});
});