
; /* Start:"a:4:{s:4:"full";s:92:"/local/templates/strangebrain/components/bitrix/map.google.view/map/script.js?15752391071665";s:6:"source";s:77:"/local/templates/strangebrain/components/bitrix/map.google.view/map/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if (!window.BX_GMapAddPlacemark)
{
	window.BX_GMapAddPlacemark = function(arPlacemark, map_id)
	{
		var map = GLOBAL_arMapObjects[map_id];
		
		if (null == map)
			return false;

		if(!arPlacemark.LAT || !arPlacemark.LON)
			return false;


		var image = new google.maps.MarkerImage('/local/templates/strangebrain/components/bitrix/map.google.view/map/images/marker.png', // - путь непосредственно к иконке маркера
			
		new google.maps.Size(60, 72), // - высота и ширина иконки маркера в пикселях

		new google.maps.Point(0,0) // - позиция относительно начала координат
		);

		var obPlacemark = new google.maps.Marker({
			'position': new google.maps.LatLng(arPlacemark.LAT, arPlacemark.LON),
			'map': map,
			'optimized': false,
			'icon': image
		});
		if (BX.type.isNotEmptyString(arPlacemark.TEXT))
		{
			obPlacemark.infowin = new google.maps.InfoWindow({
				content: arPlacemark.TEXT.replace(/\n/g, '<br />')
			});
			
			google.maps.event.addListener(obPlacemark, 'click', function() {
				if (null != window['__bx_google_infowin_opened_' + map_id])
					window['__bx_google_infowin_opened_' + map_id].close();

				this.infowin.open(this.map, this);
				window['__bx_google_infowin_opened_' + map_id] = this.infowin;
			});
		}
		
		return obPlacemark;
	}
}

if (null == window.BXWaitForMap_view)
{
	function BXWaitForMap_view(map_id)
	{
		if (null == window.GLOBAL_arMapObjects)
			return;
	
		if (window.GLOBAL_arMapObjects[map_id])
			window['BX_SetPlacemarks_' + map_id]();
		else
			setTimeout('BXWaitForMap_view(\'' + map_id + '\')', 300);
	}
}
/* End */
;; /* /local/templates/strangebrain/components/bitrix/map.google.view/map/script.js?15752391071665*/
