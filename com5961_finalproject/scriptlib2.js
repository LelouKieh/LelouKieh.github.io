$(document).ready(function(){
    $("button#mainland").click(function() {
        $("#versionchoice2").slideToggle(300);
    });
    });
    
    $(document).ready(function(){
    $("button#check").click(function() {
      $("#versionchoice1").slideToggle(300);
    });
    });
    
    $(document).ready(function(){
        $("button#gallery").click(function() {
          $("#versionchoice3").slideToggle(300);
        });
        });
    
    var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})
    
    var map = L.map('map')
          .addLayer(mapboxTiles)
          .setView([48.860148, 2.326553], 1);
    
          layerGroup = L.layerGroup().addTo(map);
    
          // create custom icon
    var yellow = L.icon({
    iconUrl: 'img/pinyellow.png',
    iconSize: [30, 40], // size of the icon
    popupAnchor: [0,-15]
    });
    
    var red = L.icon({
    iconUrl: 'img/pinred.png',
    iconSize: [30, 40], // size of the icon
    popupAnchor: [0,-15]
    });
    
    var blue = L.icon({
    iconUrl: 'img/pinblue.png',
    iconSize: [30, 40], // size of the icon
    popupAnchor: [0,-15]
    });
    
    var gallery = L.icon({
    iconUrl: 'img/pinpblue.png',
    iconSize: [30, 40], // size of the icon
    popupAnchor: [0,-15]
    });
    
    var items = [];
    var airtable_read_endpoint = "https://api.airtable.com/v0/appJKG4WbjHsOuD2X/Table%201?api_key=keywrQWiluRxtIAp8";
    var data = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = {};
                       items["name"] = value.fields.name;
                       items["url"] = value.fields.url;
                       items["image_url"] = value.fields.img_url;
                       items["latitud"] = value.fields.Lat;
                       items["longitud"] = value.fields.Lng;
                       data.push(items);
                       console.log(items);
                }); // end .each
        }); // end getJSON
    
    function show_districts1(){
    
    for (var i in data) {
      var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
      L.marker( latlng , {icon: yellow})
      .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+ '" width = "300px"><br>'+data[i].name + '</a>' )
      .addTo(layerGroup);
    };
    };
    
    
    var map2_items = [];
    var airtable_read_endpoint = "https://api.airtable.com/v0/apperyZLR5Nbl1gL2/Table%201?api_key=keywrQWiluRxtIAp8";
    var map2_data = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   map2_items = {};
                       map2_items["name"] = value.fields.Name;
                       map2_items["url"] = value.fields.url;
                       map2_items["image_url"] = value.fields.img_url;
                       map2_items["latitud"] = value.fields.Lat;
                       map2_items["longitud"] = value.fields.Lng;
                       map2_data.push(map2_items);
                       console.log(map2_items);
                }); // end .each
        }); // end getJSON
    
    function show_districts2(){
    
    for (var i in map2_data) {
      var latlng = L.latLng({ lat: map2_data[i].latitud, lng: map2_data[i].longitud });
      L.marker( latlng , {icon: red})
      .bindPopup( '<a href="' + map2_data[i].url + '" target="_blank">' + '<img src="' + map2_data[i].image_url+ '" width = "300px"><br>'+map3_data[i].name + '</a>' )
      .addTo(layerGroup);
    };
    };
    
    
    
    var map3_items = [];
    var airtable_read_endpoint = "https://api.airtable.com/v0/app0UB8IYY4kR68OZ/Table%201?api_key=keywrQWiluRxtIAp8";
    var map3_data = [];
    $.getJSON(airtable_read_endpoint, function(result) {
        $.each(result.records, function(key,value) {
            map3_items = {};
                map3_items["name"] = value.fields.name;
                map3_items["url"] = value.fields.url;
                map3_items["image_url"] = value.fields.img_url;
                map3_items["latitud"] = value.fields.Lat;
                map3_items["longitud"] = value.fields.Lng;
                map3_data.push(map3_items);
                console.log(map3_items);
         }); // end .each
 }); // end getJSON
    
    function show_districts3(){
    
    for (var i in map3_data) {
      var latlng = L.latLng({ lat: map3_data[i].latitud, lng: map3_data[i].longitud });
      L.marker( latlng , {icon: blue})
      .bindPopup( '<a href="' + map3_data[i].url + '" target="_blank">' + '<img src="' + map3_data[i].image_url+ '" width = "300px"><br>'+map3_data[i].name + '</a>' )
      .addTo(layerGroup);
    };
    };
    
    var map4_items = [];
    var airtable_read_endpoint = "https://api.airtable.com/v0/appok62zWLWgqIKBq/Table%201?api_key=keywrQWiluRxtIAp8";
    var map4_data = [];
    $.getJSON(airtable_read_endpoint, function(result) {
        $.each(result.records, function(key,value) {
            map4_items = {};
                map4_items["name"] = value.fields.name;
                map4_items["url"] = value.fields.url;
                map4_items["image_url"] = value.fields.img_url;
                map4_items["latitud"] = value.fields.Lat;
                map4_items["longitud"] = value.fields.Lng;
                map4_data.push(map4_items);
                console.log(map4_items);
         }); // end .each
 }); // end getJSON
    
    function show_districts4(){
    
    for (var i in map4_data) {
      var latlng = L.latLng({ lat: map4_data[i].latitud, lng: map4_data[i].longitud });
      L.marker( latlng , {icon: gallery})
      .bindPopup( '<a href="' + map4_data[i].url + '" target="_blank">' + '<img src="' + map4_data[i].image_url+ '" width = "300px"><br>'+map4_data[i].name + '</a>' )
      .addTo(layerGroup);
    };
    };
    
    function clear_markers () {
                   // map.removeLayer(marker);
                   layerGroup.clearLayers();
    }