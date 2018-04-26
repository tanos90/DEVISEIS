(function() {
    function init_map() {
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(32.61402, -115.405829),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggable: true,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            zoomControl: true,
            styles: [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                {
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#242f3e" }]
                },
                {
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#746855" }]
                },
                {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }]
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }]
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#263c3f" }]
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#6b9a76" }]
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#38414e" }]
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#212a37" }]
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9ca5b3" }]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{ color: "#746855" }]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#1f2835" }]
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#f3d19c" }]
                },
                {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{ color: "#2f3948" }]
                },
                {
                    featureType: "transit.station",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }]
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#17263c" }]
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#515c6d" }]
                },
                {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#17263c" }]
                }
            ]
        };
        var mapContainer = document.getElementById("gmap");
        if (!mapContainer) return;
        var icon = "/static/images/logos/marker.png";
        map = new google.maps.Map(mapContainer, mapOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(32.613932, -115.40578),
            icon: icon
        });
        infowindow = new google.maps.InfoWindow({
            content:
                '<p class="location__text location__text_iw">Devise</p><p class="location__text location__text_iw">Street</p><p class="location__text location__text_iw">Mexicali, Baja California</p>',
            maxWidth: 500
        });
        google.maps.event.addListener(marker, "click", function() {
            infowindow.open(map, marker);
        });
    }
    google.maps.event.addDomListener(window, "load", init_map);
})();
