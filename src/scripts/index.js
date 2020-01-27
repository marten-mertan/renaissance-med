function countChecked() {
    var item = $(".js-map-switch")[0].checked;
    if (item){
        $(".js-map").hide();
    } else{
        $(".js-map").show();
    }
};

window.onload = function(){
    $(".js-map-switch").on( "click", countChecked);
};