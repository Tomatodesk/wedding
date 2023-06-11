
var google;

function init() {
    // Basic options for a simple Google Map

    var myLatlng = new google.maps.LatLng(47.9747, 8);

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        styles: [{ "featureType": "all", "elementType": "labels.text.fill" }]
    };



    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        label: {
            text: 'Zum Wilden Mann',
            fontWeight: "bold",
        },
        position: { lat: 47.965606, lng: 7.973923 }
    });

    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        label: {
            text: 'Kirche am Lindenberg',
            fontWeight: "bold",
        },
        position: { lat: 48.00087663787675, lng: 8.011094643079552 }
    });
}

google.maps.event.addDomListener(window, 'load', init);