alerta = function(str){
    $("body").append("<div id='alerta'>"+str+"</div>");
    var $alerta = $("#alerta");
    $alerta.slideDown(350);
    
    $alerta.click(function(){
        $alerta.slideUp(350);
    });
    
    window.setTimeout(function() {
        $alerta.slideUp(350);
    }, 10000);
}
