window.onload = function(){
    function prepareMarkers(){
        points = [
            {'LON':'56.256963014603','LAT':'57.993839153398','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'}, 
            {'LON':'37.446191310883','LAT':'55.831191833807','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'}, 
            {'LON':'20.595477','LAT':'54.732777','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'},
            {'LON':'37.636123895645','LAT':'55.644697909217','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'},
            {'LON':'37.441878318787','LAT':'55.673906175248','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'},
            {'LON':'37.237708568573','LAT':'55.784416595812','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'},
            {'LON':'37.732801437378','LAT':'55.883158598812','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'},
            {'LON':'37.483785152435','LAT':'55.613128982101','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'},
            {'LON':'50.165264136246','LAT':'53.211617414846','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'},
            {'LON':'38.446191310883','LAT':'55.831191833807','TEXT':'<div class=\'card-map\'><div class=\'card-map-name\'>Лунда - Тушино<\/div><div class=\'card-map-address\'>г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115<\/div><div class=\'card-map-phone\'>Тел: <a href=\"tel:+74956650100\">+7 (495) 665-01-00<\/a><\/div><div class=\'card-map-site\'><a href=\'https://lunda.ru/\' target=\'_blank\'>https://lunda.ru/<\/a><\/div><\/div>'}
        ];
            
        return points;
    };
    var map;
    var markerImage = "../../assets/img/m0.png";
    var infoWindows = [];
    function initialize(){
       var center = new google.maps.LatLng(55.75370903771494, 37.61981338262558);
       map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: center,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{elementType:'geometry',stylers:[{color:'#f5f5f5'}]},{elementType:'labels.icon',stylers:[{visibility:'off'}]},{elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{elementType:'labels.text.stroke',stylers:[{color:'#f5f5f5'}]},{featureType:'administrative.land_parcel',elementType:'labels.text.fill',stylers:[{color:'#bdbdbd'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'poi',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'poi.park',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'road',elementType:'geometry',stylers:[{color:'#ffffff'}]},{featureType:'road.arterial',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#dadada'}]},{featureType:'road.highway',elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{featureType:'road.local',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'transit.line',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'transit.station',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'water',elementType:'geometry',stylers:[{color:'#c9c9c9'}]},{featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]}]
        });
     
       var infowindow = new google.maps.InfoWindow({
          content: ""  
        });
       
       var cluster = prepareMarkers();
       var dots = [];
       for ( var i = 0; i<cluster.length; i++)
       {
          var marker = addMarker(cluster[i].LAT, cluster[i].LON, cluster[i].TEXT);
          dots.push(marker);
       }
       var markerCluster = new MarkerClusterer(map, dots);
    };
    
    function addMarker(LAT, LON, TEXT){
        var infowindow = new google.maps.InfoWindow({
            content: TEXT
        });
        infoWindows.push(infowindow);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(LAT, LON),
            map: map,
            icon: markerImage
        });
     
        google.maps.event.addListener(marker, 'click', function () {
            for (var i = 0; i < infoWindows.length; i++) {
                infoWindows[i].close();
            }
            infowindow.open(map,marker);
        
            
            google.maps.event.addListener(map, 'click', function() {
                infowindow.close();
                marker.open = false;
            });
        });
     
        return marker;
    }
    function countChecked() {
        var item = $(".js-map-switch")[0].checked;
        if (item){
            $(".js-map").hide();
        } else{
            $(".js-map").show();
        }
    };

    $(document).ready(function () {
        countChecked();
        initialize();
        $(".js-map-switch").on( "click", countChecked);
    });
};